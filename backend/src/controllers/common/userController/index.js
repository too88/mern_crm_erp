const mongoose = require("mongoose");

const paginatedList = require("../../../services/common/user/paginatedList");

const createUserController = () => {
  const Model = mongoose.model("User");

  const userMethods = {
    list: (req, res) => paginatedList(Model, req, res),
  };

  return userMethods;
};

module.exports = createUserController();
