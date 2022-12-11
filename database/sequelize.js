const { Sequelize } = require("sequelize");
const dbConfig = require("./dbConfig");

const sequelizeConfig = {
  host: dbConfig.DB_HOST,
  dialect: dbConfig.DIALECT,
};

const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USERNAME,
  dbConfig.DB_PASSWORD,
  sequelizeConfig
);

module.exports = sequelize;
