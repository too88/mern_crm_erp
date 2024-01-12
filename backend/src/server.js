// setting alias for directory
require('module-alias/register');
const { globSync } = require('glob');
const path = require('path');

// import env from .env file
require('dotenv').config({ path: '.env' });

// define mongoose
const mongoose = require('mongoose');
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.info('*****Connected to mongoose*****');
  })
  .catch((error) => {
    console.info('*****Error when connected to mongoose*****', error);
  });

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
