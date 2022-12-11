const express = require("express");
const dotenv = require("dotenv");

const sequelize = require("./database/sequelize");
const config = require("./database/dbConfig");

// import routes
const productRouter = require("./routes/productRouter");

// create express application
const app = express();
dotenv.config();

// application rotues
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "home route response",
  });
});

app.use("/product", productRouter);

// database connection
sequelize
  .authenticate()
  .then((res) => {
    console.log("database connection successfull");
    app.listen(config.PORT || 8081, () => {
      console.log(`Your server is running at port ${config.PORT || 8081}...`);
    });
  })
  .catch((err) => {
    console.log("database connection fail");
  });
