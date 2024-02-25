const mongoose = require("mongoose");
const Setting = mongoose.model("Setting");

const listAllSetting = async () => {
  try {
    const result = await Setting.find({ removed: false, isPrivate: false }).exec();

    if (result.length > 0) {
      return result;
    } else {
      return [];
    }
  } catch {
    return [];
  }
};

module.exports = listAllSetting;
