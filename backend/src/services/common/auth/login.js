const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model("User");
const UserPassword = mongoose.model("UserPassword");

const login = async (req, res) => {
  const { email, password } = req.body;

  const objectSchema = Joi.object({
    email: Joi.string()
      .email({
        tlds: {
          allow: true,
        },
      })
      .required(),
    password: Joi.string().required(),
  });

  const { error } = objectSchema.validate({ email, password });
  if (error) {
    return res.status(409).json({
      success: false,
      result: null,
      error: error,
      message: "invalid account",
      errorMessage: error.message,
    });
  }

  const user = await User.findOne({ email: email, removed: false });
  if (!user) {
    return res.status(403).json({
      success: false,
      result: null,
      message: "invalid account",
    });
  }

  const userPassword = await UserPassword.findOne({ user: user._id, removed: false });

  const isMatch = await bcrypt.compare(userPassword.salt + password, userPassword.password);
  if (!isMatch) {
    return res.status(403).json({
      success: false,
      result: null,
      message: "invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      //NOTE: checked remember box
      expiresIn: req.body.remember ? 365 * 24 + "h" : "24h",
    }
  );

  await UserPassword.findOneAndUpdate(
    {
      user: user._id,
    },
    {
      $push: {
        loggedSessions: token,
      },
    },
    {
      new: true,
    }
  ).exec();

  res
    .status(200)
    .cookie("token", token, {
      maxAge: req.body.remember ? 365 * 24 * 60 * 60 * 1000 : null,
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
      },
      message: "successfully",
    });
};

module.exports = login