const express = require("express");

const router = express.Router();

const authController = require("@/controllers/common/authController");

// get method
router.route("/verify/:userId/:emailToken").get(authController.login);

// post method
router.route("/login").post(authController.login);
router.route("/register").post(authController.register);

module.exports = router;
