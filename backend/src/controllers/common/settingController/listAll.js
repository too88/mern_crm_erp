const mongoose = require("mongoose");
const Setting = mongoose.model("Setting");

const listAll = async (req, res) => {
  const sort = parseInt(req.query.sort) || "desc";

  const result = await Setting.find({
    removed: false,
    isPrivate: false,
  }).sort({
    created: sort,
  });

  if (result.length > 0) {
    return res.status(200).json({
      success: true,
      result,
      message: "success",
    });
  } else {
    return res.status(203).json({
      success: false,
      result: [],
      message: "failed",
    });
  }
};

module.exports = listAll;
