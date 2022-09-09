"use strict";

var jwt = require("jsonwebtoken");

module.exports = {
  isHr: function isHr(req, res, next) {
    var token = req.header("token");
    if (!token) return res.status(401).json('Access Denied');
    var verified = jwt.verify(token, process.env.TOKEN_KEY);

    if (verified.roleType === "2") {
      next();
    } else {
      res.status(403).json("You are not allowed to access this route!!");
    }
  }
};