const mongoose = require("mongoose");

const Setting = mongoose.model("Setting");

const updateManySetting = async (req, res) => {
  //TODO: handle error
  let updateDataArray = [];
  const { settings } = req.body;

  for (const setting of settings) {
    const { settingKey, settingValue } = setting;

    updateDataArray.push({
      updateOne: {
        filter: {
          settingKey: settingKey,
        },
        update: {
          settingValue: settingValue,
        },
      },
    });
  }

  if (updateDataArray.length === 0) {
    return res.status(202).json({
      success: false,
      result: [],
      message: "none setting provided",
    });
  }

  const result = await Setting.bulkWrite(updateDataArray);

  if (!result || result.nMatched < 1) {
    return res.status(404).json({
      success: false,
      result: [],
      message: "none setting found by update",
    });
  } else {
    return res.status(200).json({
      success: true,
      result: [],
      message: "we update all settings",
    });
  }
};

module.exports = updateManySetting;
