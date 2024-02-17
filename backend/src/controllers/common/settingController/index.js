const createCRUDController = require("@/controllers/app");
const CRUDSettingController = createCRUDController("Setting");

const listAll = require("./listAll");
const updateManySetting = require("./updateManySetting");

const settingMethods = {
  read: CRUDSettingController.read,
  create: CRUDSettingController.create,
  update: CRUDSettingController.update,
  list: CRUDSettingController.list,
  search: CRUDSettingController.search,
  listAll: listAll,
  updateManySetting,
};

module.exports = settingMethods;
