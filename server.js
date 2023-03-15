const express = require("express");
const dotenv = require("dotenv");

const sequelize = require("./database/sequelize");
const dbConfig = require("./database/dbConfig");

// import routes
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");

// create express application
const app = express();
dotenv.config();
app.use(express.json());

// application rotues
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "home route response",
  });
});

app.use("/product", productRouter);
app.use("/user", userRouter);

// database connection
sequelize
  .authenticate()
  .then((res) => {
    console.log("database connection successfull");
    app.listen(dbConfig.PORT || 8081, () => {
      console.log(`Your server is running at port ${dbConfig.PORT || 8081}...`);
      console.log("all models ::", sequelize.models);
    });
  })
  .catch((err) => {
    console.log("database connection fail");
  });
