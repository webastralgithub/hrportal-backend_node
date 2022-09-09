"use strict";

// const LeaveApplication = require("../models/LeaveApplication")
var Employee = require("../models/Employee");

var LeaveApplication = require("../models/LeaveApplication");

exports.updateApplicationStatus = function _callee(req, res) {
  var appId, updateStatusApplication;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          appId = req.params.appId;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(LeaveApplication.findByIdAndUpdate(appId, {
            Status: req.body.Status
          }, {
            "new": true
          }));

        case 4:
          updateStatusApplication = _context.sent;

          if (!(updateStatusApplication.Status === "1")) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            status: true,
            msg: "Your Application in pending"
          }));

        case 9:
          if (!(updateStatusApplication.Status === "2")) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            status: true,
            msg: "Your Application was rejected"
          }));

        case 13:
          return _context.abrupt("return", res.status(200).json({
            status: true,
            msg: "Your Application was approoved"
          }));

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 16]]);
};

exports.rejectStatus = function _callee2(req, res) {
  var appId, rejectApplication;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          appId = req.params.appId;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(LeaveApplication.findByIdAndUpdate(appId, {
            Status: "2"
          }));

        case 4:
          rejectApplication = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: true,
            msg: "Application was rejectrd"
          }));

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", res.status(500).json(_context2.t0));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.approoveStatus = function _callee3(req, res) {
  var appId, approoveApplication;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          appId = req.params.appId;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(LeaveApplication.findByIdAndUpdate(appId, {
            Status: "3"
          }));

        case 4:
          approoveApplication = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: true,
            msg: "Application was approove"
          }));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).json(_context3.t0));

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
};