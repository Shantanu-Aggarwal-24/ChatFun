const express = require("express");
const {signUp, getUsers,otpVerify} = require("./user.controller");
const router = express.Router();

router.post("/signup", signUp);
router.get("/users", getUsers);
router.post("/otpVerify",otpVerify)

module.exports = router;
