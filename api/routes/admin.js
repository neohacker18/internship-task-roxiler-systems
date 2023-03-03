const express = require("express");
const router = express.Router();
const adminController= require("../controllers/adminController");

router.get("/getData", adminController.getData);

module.exports = router;
