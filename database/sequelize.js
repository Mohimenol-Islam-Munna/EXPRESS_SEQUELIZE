const { Sequelize } = require("sequelize");
const dbConfig = require("./dbConfig");

const sequelizeOptions = {
  host: dbConfig.DB_HOST,
  dialect: dbConfig.DIALECT,
};

const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USERNAME,
  dbConfig.DB_PASSWORD,
  sequelizeOptions
);

module.exports = sequelize;
