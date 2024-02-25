const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const shortId = require("shortid");
const sendMernOffer = require("./sendMernOffer");

const User = mongoose.model("User");
const UserPassword = mongoose.model("UserPassword");

const verify = async (req, res) => {
  const { userId, emailToken } = req.params;

  const userPasswordResult = await UserPassword.findOne({ user: userId, removed: false });
  if (!userPasswordResult) {
    return res.status(404).json({
      success: false,
      result: [],
      message: "email was not has been registered",
    });
  }

  const isMatch = emailToken === userPasswordResult.emailToken;
  if (
    !isMatch ||
    userPasswordResult.emailToken === undefined ||
    userPasswordResult.emailToken === null
  ) {
    return res.status(403).json({
      success: false,
      result: [],
      message: "Invalid verify token",
    });
  }

  const token = jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  await UserPassword.findOneAndUpdate(
    {
      user: userId,
    },
    {
      $push: {
        loggedSessions: token,
      },
      emailToken: shortId.generate(),
      emailVerified: true,
    }
  ).exec();

  const user = await User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      enabled: true,
    },
    {
      new: true,
    }
  ).exec();

  await sendMernOffer({ email: user.email, name: user.name });

  res
    .status(200)
    .cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "Lax",
      httpOnly: true,
      secure: false,
      domain: req.hostname,
      path: "/",
      Partitioned: true,
    })
    .json({
      success: true,
      result: {
        _id: user._id,
        name: user.name,
        surname: user.surname,
        role: user.role,
        email: user.email,
        photo: user.photo,
      },
      message: "successfully logged",
    });
};

module.exports = verify;
