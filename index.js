const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const adminRoute = require("./api/routes/admin");
const salesRoute = require("./api/routes/sales");

app.use("/admin", adminRoute);
app.use("/sales", salesRoute);
app.use(morgan("dev"));

mongoose.connect(MONGODB_URI).then(() => {
  console.log("Connected to Mongodb");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
