"use strict";

var express = require("express");

var router = express.Router();

var _require = require('../controllers/auth'),
    login = _require.login;

router.post("/login", login);
module.exports = router;