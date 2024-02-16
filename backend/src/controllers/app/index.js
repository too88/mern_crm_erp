require("module-alias/register");
const createCRUDController = require("@/controllers/app/common");
const { routeList } = require("@/utils");
const { globSync } = require("glob");
const path = require("path");

const servicePath = "./src/controllers/app/common/*/";
const serviceDirectories = globSync(servicePath).map((filePath) => {
  return path.basename(filePath);
});

const appController = () => {
  const controllers = {};
  const hasCustomControllers = [];

  serviceDirectories.forEach((serviceName) => {
    try {
      const customService = require("@/controllers/app/common/" + serviceName);

      if (customService) {
        hasCustomControllers.push(serviceName);
        controllers[serviceName] = customService;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  });

  routeList.forEach(({ modelName, controllerName }) => {
    if (!hasCustomControllers.includes(controllerName)) {
      // service layer
      controllers[controllerName] = createCRUDController(modelName);
    }
  });

  return controllers;
};

module.exports = appController();
