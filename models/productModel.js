const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const { INTEGER, STRING } = DataTypes;

// create model
const Product = sequelize.define("product", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: { type: STRING, allowNull: false, defaultValue: "Md" },
  lastName: { type: STRING, allowNull: true },
});

// create Product table
const createProductTable = async () => {
  try {
    await Product.sync();
  } catch (err) {
    console.log("Product Table Does Not Created");
  }
};

createProductTable();

module.exports = Product;
