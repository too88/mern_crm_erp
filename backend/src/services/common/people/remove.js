const mongoose = require("mongoose");

const Client = mongoose.model("Client");
const Company = mongoose.model("Company");
const People = mongoose.model("People");

const remove = async (req, res) => {
  const { id } = req.params;

  // validate relationship with Client
  const client = await Client.findOne({
    people: id,
    removed: false,
  }).exec();
  if (client) {
    return res.status(400).json({
      success: false,
      result: [],
      message: "delete failed. Connected with client",
    });
  }

  // validate relationship with Company
  const company = await Company.findOne({
    mainContact: id,
    removed: false,
  }).exec();
  if (company) {
    return res.status(400).json({
      success: false,
      result: [],
      message: "delete failed. Connected with company",
    });
  }

  const resultRef = await People.findOneAndUpdate(
    {
      _id: id,
      removed: false,
    },
    {
      $set: {
        removed: true,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  ).exec();

  if (!resultRef) {
    return res.status(404).json({
      success: false,
      result: [],
      message: "no data for id: " + id,
    });
  } else {
    res.status(200).json({
      success: true,
      result: resultRef,
      message: "data have id: " + id,
    });
  }
};

module.exports = remove;
