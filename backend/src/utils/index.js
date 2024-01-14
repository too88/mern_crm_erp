const { basename, extname } = require('path');
const { globSync } = require('glob');
const constant = require('@/constants/path')

const allModelPattern = constant.ALL_MODEL_PATTERN_PATH;
const appModelPattern = constant.APP_MODEL_PATTERN_PATH;

const allModelFileList = globSync(allModelPattern).map((filePath) => {
  const fileNameWithExtension = basename(filePath);

  const fileNameReplaced = fileNameWithExtension.replace(extname(fileNameWithExtension), '');
  return fileNameReplaced;
});

let routeList = [];

for (const filePath of globSync(appModelPattern)) {
  const fileNameWithExtension = basename(filePath);

  const fileNameReplaced = fileNameWithExtension.replace(extname(fileNameWithExtension), '');

  // validate name of model files
  const getFirstCharFileName = fileNameReplaced.charAt(0);

  const upperCaseModelFileName = fileNameReplaced.replace(
    getFirstCharFileName,
    getFirstCharFileName.toUpperCase()
  );
  const lowerCaseModelFileName = fileNameReplaced.replace(
    getFirstCharFileName,
    getFirstCharFileName.toLowerCase()
  );
  const lowerCaseEntity = fileNameReplaced.toLowerCase();

  // define route
  const route = {
    entity: lowerCaseEntity,
    modelName: upperCaseModelFileName,
    controllerName: lowerCaseModelFileName + 'Controller',
  };

  routeList.push(route);
}

module.exports = { allModelFileList, routeList };
