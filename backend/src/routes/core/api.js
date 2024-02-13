const express = require("express");

const router = express.Router();

const adminController = require("@/controllers/core/AdminController");
const settingController = require("@/controllers/core/SettingController");

// ===================== ADMIN PROFILE =====================
// get method
router.route("/admin/list").get(adminController["list"]);

// ===================== SETTING APIs ======================
// get method
router.route("/setting/listAll").get(settingController.listAll);

// update method
router.route("/setting/updateManySetting").get(settingController.updateManySetting);

module.exports = router;
