const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

// data types
const { STRING, INTEGER, TEXT } = DataTypes;

// model definition
const User = sequelize.define(
  "User",
  {
    firstName: {
      type: STRING,
    },
    lastName: {
      type: STRING,
    },
    userName: {
      type: STRING,
      required: true,
    },
    password: {
      type: STRING,
      required: true,
    },
    age: {
      type: INTEGER,
    },
    address: {
      type: TEXT,
    },
  },
  {}
);

// create Users table
const createUserTable = async () => {
  try {
    await User.sync({ alter: true });
  } catch (err) {
    console.log("Users table creation error ::", err);
  }
};

createUserTable();

module.exports = User;
