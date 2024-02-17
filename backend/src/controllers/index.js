require("module-alias/register");
const createCRUDController = require("@/controllers/app");
const { routeList } = require("@/utils");
const { globSync } = require("glob");
const path = require("path");

const commonControllerPath = "./src/controllers/common/*/";
const commonControllerDirectories = globSync(commonControllerPath).map((filePath) => {
  return path.basename(filePath);
});

const appController = () => {
  const controllers = {};
  const hasCustomControllers = [];

  commonControllerDirectories.forEach((controllerName) => {
    try {
      const customController = require("@/controllers/common/" + controllerName);

      if (customController) {
        hasCustomControllers.push(controllerName);

        // if have customController => replace it here
        controllers[controllerName] = customController;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  });

  routeList.forEach(({ modelName, controllerName }) => {
    if (!hasCustomControllers.includes(controllerName)) {
      controllers[controllerName] = createCRUDController(modelName);
    }
  });

  return controllers;
};

module.exports = appController();
