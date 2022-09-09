"use strict";

var mongoose = require("mongoose");

var Employee = require("../models/Employee");

var jwt = require('jsonwebtoken');

var bcrypt = require('bcrypt');

exports.login = function _callee(req, res) {
  var check, validPass, token, decode;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Employee.findOne({
            Email: req.body.Email
          }));

        case 3:
          check = _context.sent;

          if (!(check == null)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            status: false,
            msg: "Invalid Credentials!"
          }));

        case 8:
          if (!(check.Email == req.body.Email)) {
            _context.next = 17;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.Password, check.Password));

        case 11:
          validPass = _context.sent;

          if (validPass) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            status: false,
            msg: "invalid password"
          }));

        case 14:
          token = jwt.sign({
            _id: check._id,
            Account: check.Account,
            Email: check.Email,
            Name: check.FirstName + " " + check.MiddleName + " " + check.LastName
          }, process.env.TOKEN_KEY);
          decode = jwt.verify(token, process.env.TOKEN_KEY);
          return _context.abrupt("return", res.status(200).json({
            status: true,
            msg: "Login Successfully",
            "token": token,
            userDetails: decode
          }));

        case 17:
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
};