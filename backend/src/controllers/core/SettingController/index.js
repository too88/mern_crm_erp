const createCRUDService = require("@/services/common");
const CRUDSettingController = createCRUDService("Setting");

const listAll = require("./listAll");
const updateManySetting = require("./updateManySetting");

const settingMethods = {
  read: CRUDSettingController.read,
  create: CRUDSettingController.create,
  update: CRUDSettingController.update,
  list: CRUDSettingController.list,
  filter: CRUDSettingController.filter,
  search: CRUDSettingController.search,
  listAll: listAll,
  updateManySetting,
};

module.exports = settingMethods;
