const express = require("express");
const router = express.Router();
const salesController = require("../controllers/salesController");

router.get("/getSalesData/:month", salesController.getSalesData);

module.exports = router;
