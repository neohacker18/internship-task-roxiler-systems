const express = require("express");
const router = express.Router();
const salesController = require("../controllers/salesController");

router.get("/getSalesData/:month", salesController.getSalesData);
router.get("/getBarChartData/:month", salesController.getBarChartData);
router.get("/getPieChartData/:month", salesController.getPieChartData);

module.exports = router;
