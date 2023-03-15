// improt model
const Product = require("../models/productModel");

exports.fetchAllProduct = (req, res) => {
  res.status(200).json({ status: "success", data: "all products data" });
};

exports.createProduct = async (req, res) => {
  try {
    const product = Product.build({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const query = await product.save();

    res
      .status(201)
      .json({ status: "success", data: "product created successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ status: "error", err: err, message: "product does not created" });
  }
};
