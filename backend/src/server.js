require('module-alias/register');
const { globSync } = require('glob');
const connectionModule = require('@/setup/connection');
const path = require('path');

require('dotenv').config({ path: '.env' });

connectionModule.connection();

const modelFiles = globSync('./src/models/**/*.js');
for (const filePath of modelFiles) {
  require(path.resolve(filePath));
}

const app = require('./app');
app.set('port', process.env.PORT || 8888);

const server = app.listen(app.get('port'), () => {
  console.log(`*****Express running***** → On PORT : ${server.address().port}`);
});
