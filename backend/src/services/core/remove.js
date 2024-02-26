const remove = async (Model, req, res) => {
  //NOTE: logical deletion not for physical deletion

  const { id } = req.params;

  const resultRef = await Model.findOneAndUpdate(
    {
      _id: id,
      removed: false,
    },
    {
      $set: {
        removed: true,
      },
    },
    // NOTE: new: true:
    // tells Mongoose to return the modified document rather than the original document.
    // runValidators: true:
    // tells Mongoose to run any validators defined on the schema for this update operation.
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
