const createCRUDService = require("@/services/common");
const { routeList } = require("@/utils");

const appController = () => {
  const controllers = {};

  routeList.forEach(({ modelName, controllerName }) => {
    // service layer
    controllers[controllerName] = createCRUDService(modelName);
  });

  return controllers;
};

module.exports = appController();
