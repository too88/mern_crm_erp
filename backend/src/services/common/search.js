require("module-alias/register");
const constants = require("@/constants/common");

const search = async (Model, req, res) => {
  const isValidQuery = req.query.q === undefined || req.query.q.trim() === "";
  if (isValidQuery) {
    return res
      .status(202)
      .json({
        success: false,
        result: [],
        message: "no document was found",
      })
      .end();
  }

  const shouldSearchableList = req.query.fields
    ? req.query.fields.split(",")
    : constants.SEARCH_FIELD_LIST_DEFAULT;

  const fields = { $or: [] };

  for (const field of shouldSearchableList) {
    fields.$or.push({ [field]: { $regex: new RegExp(req.query.q, "i") } });
  }

  const result = await Model.find(fields)
    .where("removed", false)
    .limit(constants.PAGINATE_PAGESIZE)
    .exec();

  if (result.length >= 1) {
    return res.status(200).json({
      success: true,
      result: result,
      message: "search successfully",
    });
  } else {
    return res
      .status(202)
      .json({
        success: false,
        result: [],
        message: "search failed",
      })
      .end();
  }
};

module.exports = search;
