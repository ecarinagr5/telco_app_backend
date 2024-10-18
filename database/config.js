const DB = require("../utils/constants.json");
const { test, prod } = DB;

const environment = test;
const dbConfig = {
  user: environment.userDB,
  password: environment.passwordDB,
  server: environment.server,
  database: environment.database,
  synchronize: true,
  trustServerCertificate: true,
  port: environment.port,
};

const table = environment.table;

module.exports = { dbConfig, table };