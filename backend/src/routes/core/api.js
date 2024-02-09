const express = require("express");

const router = express.Router();

const adminController = require("@/controllers/core/AdminController");

// get method
router.route('/admin/list').get(adminController['list']);

module.exports = router;
