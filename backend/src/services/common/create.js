const create = async (Model, res, req) => {
  const resultRef = await new Model(req.body).save();

  return res.status(200).json({
    success: true,
    result: resultRef,
    message: "create successfully",
  });
};

module.exports = create;
