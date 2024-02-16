const mongoose = require("mongoose");

const { allModelFileList } = require("@/utils");

const paginatedList = require("../../../services/common/paginatedList");
const read = require("../../../services/common/read");
const create = require("../../../services/common/create");
const update = require("../../../services/common/update");
const remove = require("../../../services/common/remove");
const search = require("../../../services/common/search");

const createCRUDController = (modelName) => {
  if (!allModelFileList.includes(modelName)) {
    throw new Error(`Model ${modelName} does not exists`);
  }

  const Model = mongoose.model(modelName);

  const serviceList = {
    read: (req, res) => read(Model, req, res),
    list: (req, res) => paginatedList(Model, req, res),
    create: async (req, res) => {
      // FIXME: refactor this method
      req.body.removed = false;

      const resultRef = await new Model(req.body).save();

      return res.status(200).json({
        success: true,
        result: resultRef,
        message: "create successfully",
      });
    },
    update: (req, res) => update(Model, req, res),
    delete: (req, res) => remove(Model, req, res),
    search: (req, res) => search(Model, req, res),
  };

  return serviceList;
};

module.exports = createCRUDController;
