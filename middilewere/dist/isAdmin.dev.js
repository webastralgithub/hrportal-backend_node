"use strict";

var res = require("express/lib/response");

var jwt = require("jsonwebtoken");

exports.isAdmin = function (req, res, next) {
  var token = req.header("token");

  if (!token) {
    return res.status(401).json("access denied");
  } else {
    var verified = jwt.verify(token, process.env.TOKEN_KEY);

    if (verified.Account === "1") {
      next();
    } else {
      return res.status(403).json("you are not allowed for this route only Admin can access");
    }
  }
};

exports.isAdminHr = function (req, res, next) {
  var token = req.header("token");

  if (!token) {
    return res.status(401).json("Access Denied");
  } else {
    var verified = jwt.verify(token, process.env.TOKEN_KEY);

    if (verified.Account === "1" || verified.Account === "2") {
      next();
    } else {
      return res.status(403).json("you are not allowed for this route only Admin or HR add this field");
    }
  }
};

exports.isHr = function (req, res, next) {
  var token = req.header("token");

  if (!token) {
    return res.status(401).json("access Denied");
  } else {
    var verified = jwt.verify(token, process.env.TOKEN_KEY);

    if (verified.Account === "2") {
      next();
    } else {
      res.status(403).json("you are not allowed for this route only HR add this position");
    }
  }
};

exports.isHrEmp = function (req, res, next) {
  var token = req.header("token");

  if (!token) {
    return res.status(401).json("Access Denied");
  } else {
    var verified = jwt.verify(token, process.env.TOKEN_KEY);

    if (verified.Account === "2" || verified.Account === "3") {
      next();
    } else {
      return res.status(403).json("you are not allowed for this route.");
    }
  }
};

exports.isEmp = function (req, res, next) {
  var token = req.header("token");

  if (!token) {
    return res.status(401).json("Access Denied");
  } else {
    var verified = jwt.verify(token, process.env.TOKEN_KEY);

    if (verified.Account === "3") {
      next();
    } else {
      return res.status(403).json("you are not allowed for this route");
    }
  }
};