"use strict";

var jwt = require("jsonwebtoken");

module.exports = {
  isEmp: function isEmp(req, res, next) {
    var token = req.header("token");
    if (!token) return res.status(401).json('Access Denied');
    var verified = jwt.verify(token, "jhsjhdsjhdjdfhgfbsfjfdhfj");

    if (verified.roleType === "3") {
      next();
    } else {
      res.status(403).json("You are not allowed to access this route!!");
    }
  }
};