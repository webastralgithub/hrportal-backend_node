"use strict";

var Department = require("../models/Department");

exports.addDepart = function _callee(req, res) {
  var check, addDeprt, saveDepart;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Department.findOne({
            departmentName: req.body.departmentName
          }));

        case 3:
          check = _context.sent;

          if (!(check == null)) {
            _context.next = 12;
            break;
          }

          addDeprt = new Department(req.body);
          _context.next = 8;
          return regeneratorRuntime.awrap(addDeprt.save());

        case 8:
          saveDepart = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            status: true,
            data: saveDepart
          }));

        case 12:
          return _context.abrupt("return", res.status(409).json({
            status: false,
            msg: "This Department already exist"
          }));

        case 13:
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

exports.getDepartmentList = function _callee2(req, res) {
  var allDepart;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Department.find());

        case 3:
          allDepart = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: true,
            data: allDepart
          }));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json(_context2.t0));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateDepartment = function _callee3(req, res) {
  var id, check, update;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Department.findById(id));

        case 4:
          check = _context3.sent;

          if (!(check != null)) {
            _context3.next = 14;
            break;
          }

          if (!(check.departmentName == req.body.departmentName)) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.status(409).json({
            status: false,
            msg: "department already exist"
          }));

        case 10:
          _context3.next = 12;
          return regeneratorRuntime.awrap(Department.findByIdAndUpdate(id, req.body, {
            "new": true
          }));

        case 12:
          update = _context3.sent;
          return _context3.abrupt("return", res.status(201).json({
            status: true,
            data: update,
            msg: "Data updated"
          }));

        case 14:
          _context3.next = 19;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).json(_context3.t0));

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 16]]);
};

exports.deleteDepartment = function _callee4(req, res) {
  var id, findAndDeleteDepart;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Department.findByIdAndDelete(id));

        case 4:
          findAndDeleteDepart = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            status: true,
            data: findAndDeleteDepart,
            msg: "Data deleted"
          }));

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", res.status(500).json(_context4.t0));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};