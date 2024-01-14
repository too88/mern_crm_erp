require('module-alias/register');
const Database = require('@/config/db');

function connection() {
  const isProduction = process.env.NODE_ENV === 'production';
  const mongoURI = isProduction ? process.env.MONGODB_URI_PROD : process.env.MONGODB_URI_DEV;
  const db = new Database(mongoURI, {
    dbName: 'erp',
  });
  db.connect().catch((err) => console.log('Error connecting to database: ', err));
}

module.exports = { connection };
