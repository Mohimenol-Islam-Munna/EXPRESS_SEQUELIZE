const { DataTypes } = require("sequelize");
const sequelize = require("./utils/database_config/db_config");

// create model
const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    parimaryKey: true,
  },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Product;
