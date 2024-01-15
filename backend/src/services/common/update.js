const update = async (Model, req, res) => {
  req.body.removed = false;

  const resultRef = await Model.findOneAndUpdate(
    {
      _id: req.params.id,
      removed: false,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  ).exec();

  if (!resultRef) {
    return res.status(400).json({
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

module.exports = update;
