const listAllSetting = require("./listAllSetting");

const loadSetting = async () => {
  const allSetting = {};
  const dataList = await listAllSetting();
  dataList.forEach(({ settingKey, settingValue }) => {
    allSetting[settingKey] = settingValue;
  });
  return allSetting;
};

module.exports = loadSetting;
