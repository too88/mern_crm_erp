const { globSync } = require('glob');
const { basename } = require('path');

const createCRUDService = require('@/services/common');
const { routeList } = require('@/utils');
const constant = require('@/constants/path');

const appModelPatternPath = constant.APP_CONTROLLER_PATTERN_PATH;

const controllerDir = globSync(appModelPatternPath).map((filePath) => {
  return basename(filePath);
});

const appController = () => {
  const controllers = {};
  const hasValidateController = [];

  controllerDir.forEach((controllerName) => {
    try {
      const validateController = require('@/controllers/app' + controllerName);

      if (validateController) {
        hasValidateController.push(controllerName);
        controllers[controllerName] = validateController;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  });

  routeList.forEach(({ modelName, controllerName }) => {
    if (!hasValidateController.includes(controllerName)) {
      // service layer 
      controllers[controllerName] = createCRUDService(modelName);
    }
  });

  return controllers;
}

module.exports = appController();
