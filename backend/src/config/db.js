const mongoose = require('mongoose');

class Database {
  constructor(uri, option) {
    this.uri = uri;
    this.option = option;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.option);
      console.log(`Connected database: ${mongoose.connection.db.databaseName}`);
    } catch (error) {
      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(`Disconnected database: ${mongoose.connection.db.databaseName}`);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Database;
