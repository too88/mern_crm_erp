const remove = async (Model, req, res) => {
  //NOTE: logical deletion not for physical deletion
  const resultRef = await Model.findOneAndUpdate(
    {
      _id: req.params.id,
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
      result: resultRef,
      message: "no data for id: " + req.params.id,
    });
  } else {
    res.status(200).json({
      success: true,
      result: resultRef,
      message: "data have id: " + req.params.id,
    });
  }
};

module.exports = remove;
