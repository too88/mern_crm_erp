const read = async (Model, req, res) => {
  const resultRef = await Model.findOne({
    _id: req.params.id,
    removed: false,
  }).exec();

  if (!resultRef) {
    res.status(404).json({
      success: false,
      result: [],
      message: 'no data for id: ' + req.params.id,
    });
  } else {
    res.status(200).json({
      success: true,
      result: resultRef,
      message: 'data have id: ' + req.params.id,
    });
  }
};

module.exports = read;
