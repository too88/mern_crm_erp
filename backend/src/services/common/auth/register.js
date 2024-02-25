const bcrypt = require("bcryptjs");
const Joi = require("joi");
const mongoose = require("mongoose");
const { generate: uniqueId } = require("shortid");
const { loadSetting } = require("@/middlewares/settings");
const checkAndCorrectURL = require("./checkAndCorrectURL");
const sendMail = require("./sendMail");

const User = mongoose.model("User");
const UserPassword = mongoose.model("UserPassword");

const register = async (req, res) => {
  const settings = await loadSetting();
  const { name, email, password } = req.body;

  const mern_registration_allowed = settings["mern_registration_allowed"];
  const mern_app_email = settings["mern_app_email"];
  const mern_base_url = settings["mern_base_url"];

  // is unable allow registration
  if (!mern_registration_allowed) {
    return res.status(409).json({
      success: false,
      result: [],
      message: "registration is not allowed, please contact your admin",
    });
  }

  // validation
  const objectSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: true } }),
    password: Joi.string().required(),
  });

  const { error } = objectSchema.validate({ name, email, password });
  if (error) {
    return res.status(409).json({
      success: false,
      result: [],
      message: "invalid or missing credential",
      error: error,
      errorMessage: error.message,
    });
  }

  const existingUser = await User.findOne({ email: email, removed: false });
  if (existingUser) {
    return res.status(409).json({
      success: false,
      result: [],
      message: "email has already been registered",
    });
  }

  const salt = uniqueId();
  const emailToken = uniqueId();
  const hashedPassword = bcrypt.hashSync(salt + password);

  const savedUser = await User.create({ email, name });
  const registrationDone = await UserPassword.create({
    user: savedUser._id,
    password: hashedPassword,
    salt: salt,
    emailToken: emailToken,
  });

  if (!registrationDone) {
    await User.deleteOne({ _id: savedUser._id }).exec();

    return res.status(403).json({
      success: true,
      result: [],
      message: "something wrong happen when registration, please contact your admin",
    });
  }

  const url = checkAndCorrectURL(mern_base_url);
  const link = url + "/verify/" + savedUser._id + "/" + emailToken;
  await sendMail({ email, name, link, mern_app_email });

  return res.status(200).json({
    success: true,
    result: {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser._id,
    },
    message: "account registered successfully, please verify your email",
  });
};

module.exports = register;
