const express = require("express");

const router = express.Router();

const adminController = require("@/controllers/common/adminController");
const settingController = require("@/controllers/common/settingController");

// ===================== ADMIN PROFILE =====================
// get method
router.route("/admin/list").get(adminController["list"]);

// ===================== SETTING APIs ======================
// get method
router.route("/setting/listAll").get(settingController.listAll);

// patch method
router.route("/setting/updateManySetting").patch(settingController.updateManySetting);

module.exports = router;
