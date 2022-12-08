const sequelize = require("../models/utils/database_config/db_config");

exports.fetchAllProduct = (req, res) => {
  console.log("Models List ::", sequelize.models);
  res.status(200).json({ status: "success", data: "all products data" });
};
