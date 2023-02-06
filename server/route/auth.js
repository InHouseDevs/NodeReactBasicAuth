const express = require("express");
const router = express.Router();

const controller = require('../controller/auth');//Requring Controllers

router.post("/register", controller.register);

router.post("/login", controller.login);

module.exports = router