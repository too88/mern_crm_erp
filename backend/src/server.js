// setting alias for directory
require('module-alias/register');
const { globSync } = require('glob');
const connectionModule = require('@/setup/connection');
const path = require('path');

// import env from .env file
require('dotenv').config({ path: '.env' });

// connect to mongodb
connectionModule.connection();

// inject and resolve all model files into app
const modelFiles = globSync('./src/models/**/*.js');
for (const filePath of modelFiles) {
  require(path.resolve(filePath));
}

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 8888);

const server = app.listen(app.get('port'), () => {
  console.log(`*****Express running***** → On PORT : ${server.address().port}`);
});
