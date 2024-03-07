const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

const UserPassword = mongoose.model("UserPassword");
const User = mongoose.model("User");

const isValidAuthToken = async (req, res, next, { jwtSecret = "JWT_SECRET" }) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({
        success: false,
        result: null,
        message: "No authentication token, authorization denied.",
        jwtExpired: true,
      });

    const verified = jwt.verify(token, process.env[jwtSecret]);

    if (!verified)
      return res.status(401).json({
        success: false,
        result: null,
        message: "Token verification failed, authorization denied.",
        jwtExpired: true,
      });

    const userPromise = User.findOne({ _id: verified.id, removed: false });
    const userPasswordPromise = UserPassword.findOne({ user: verified.id, removed: false });

    const [user, userPassword] = await Promise.all([userPromise, userPasswordPromise]);

    if (!user)
      return res.status(401).json({
        success: false,
        result: null,
        message: "User doens't Exist, authorization denied.",
        jwtExpired: true,
      });

    const { loggedSessions } = userPassword;
    console.log("🚀 ~ isValidAuthToken ~ loggedSessions:", loggedSessions)
    if (!loggedSessions.includes(token))
      return res.status(401).json({
        success: false,
        result: null,
        message: "User is already logout try to login, authorization denied.",
        jwtExpired: true,
      });
    else {
      req["user"] = user;
      next();
    }
  } catch (error) {
    res.status(503).json({
      success: false,
      result: null,
      message: error.message,
      error: error,
      controller: "isValidAuthToken",
    });
  }
};

module.exports = isValidAuthToken;
