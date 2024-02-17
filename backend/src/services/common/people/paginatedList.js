require("module-alias/register");
const constants = require("@/constants/common");
const mongoose = require("mongoose");
const People = mongoose.model("People");

const paginatedList = async (req, res) => {
  const page = req.query.page || constants.PAGINATE_PAGE_DEFAULT;
  const limit = parseInt(req.query.items) || constants.PAGINATE_PAGESIZE;
  const skip = page * limit - limit;

  const resultRef = People.find({ removed: false })
    .skip(skip)
    .limit(limit)
    .sort({ created: "desc" })
    .populate('company', 'name')
    .exec();

  const countRef = People.countDocuments({ removed: false });

  const [result, count] = await Promise.all([resultRef, countRef]);

  const pages = Math.ceil(count / limit);

  const pagination = { page, pages, count };

  if (count > 0) {
    return res.status(200).json({
      success: true,
      result,
      pagination,
      message: "success",
    });
  } else {
    return res.status(203).json({
      success: false,
      result: [],
      pagination,
      message: "failed",
    });
  }
};

module.exports = paginatedList;
