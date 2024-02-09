const mongoose = require("mongoose");

const paginatedList = require("./paginatedList");

const createUserController = (modelName) => {
  const Model = mongoose.model(modelName);

  const userServiceList = {
    list: (req, res) => paginatedList(Model, req, res),
  };

  return userServiceList;
};

module.exports = createUserController;
