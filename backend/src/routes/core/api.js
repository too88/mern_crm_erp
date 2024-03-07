const express = require("express");

const router = express.Router();
const { hasPermission } = require("@/middlewares/authorization/permission");

const userController = require("@/controllers/common/userController");
const settingController = require("@/controllers/common/settingController");

// ===================== ADMIN PROFILE =====================
// get method
router.route("/admin/list").get(hasPermission(), userController["list"]);

// ===================== SETTING APIs ======================
// get method
router.route("/setting/listAll").get(hasPermission("read"), settingController.listAll);

// patch method
router
  .route("/setting/updateManySetting")
  .patch(hasPermission(), settingController.updateManySetting);

module.exports = router;
