const userRouter = require("express").Router();

userRouter.get("/", (req, res) => {
  console.log("user route ::", req.path);

  res.json({ status: true, message: "success" });
  res.end("user home");
});

module.exports = userRouter;
