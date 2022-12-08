const express = require("express");
const dotenv = require("dotenv");

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

app.listen(process.env.PORT, () => {
  console.log(`Your server is running at port ${process.env.PORT}...`);
});
