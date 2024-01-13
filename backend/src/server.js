// setting alias for directory
require('module-alias/register');
const { globSync } = require('glob');
const path = require('path');

// import env from .env file
require('dotenv').config({ path: '.env' });

// init database
const Database = require('./config/db');
const db = new Database(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.connect().catch((err) => console.log('Error connecting to database: ', err));

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
