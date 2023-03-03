const express = require("express");
const router = express.Router();
const adminController= require("../controllers/adminController");

router.get("/getData", adminController.getData);
router.get("/getCombinedResponse/:month", adminController.getCombinedResponse);

module.exports = router;
