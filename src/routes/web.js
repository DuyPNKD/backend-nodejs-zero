const express = require("express");
const router = express.Router();
const {getHomePage, getABC, getLocalhost} = require("../controllers/homeController");
// router.Method("/route", handler);

// controller
router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/localhost", getLocalhost);

module.exports = router; //export default;
