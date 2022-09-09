"use strict";

var UserRole = require("../models/UserRole");

exports.addRole = function _callee(req, res) {
  var addRole, saveRole;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          addRole = new UserRole(req.body);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(addRole.save());

        case 4:
          saveRole = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            data: saveRole
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getRole = function _callee2(req, res) {
  var getRole;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(UserRole.find());

        case 3:
          getRole = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            data: getRole,
            status: true
          }));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            msg: _context2.t0,
            status: false
          }));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateRole = function _callee3(req, res) {
  var id, check, updateRole;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          console.log(id);
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(UserRole.findById(id));

        case 5:
          check = _context3.sent;

          if (!(check != null)) {
            _context3.next = 15;
            break;
          }

          if (!(check.roleType == req.body.roleType)) {
            _context3.next = 11;
            break;
          }

          return _context3.abrupt("return", res.status(409).json({
            status: false,
            msg: "Role already exist"
          }));

        case 11:
          _context3.next = 13;
          return regeneratorRuntime.awrap(UserRole.findByIdAndUpdate(id, req.body, {
            "new": true
          }));

        case 13:
          updateRole = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            data: updateRole,
            status: true,
            msg: "Data updated"
          }));

        case 15:
          _context3.next = 20;
          break;

        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](2);
          return _context3.abrupt("return", res.status(500).json({
            msg: _context3.t0,
            status: false
          }));

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 17]]);
};

exports.deleteRole = function _callee4(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(UserRole.findByIdAndDelete(id));

        case 4:
          return _context4.abrupt("return", res.status(200).json({
            status: true,
            msg: "Data deleted"
          }));

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", res.status(500).json({
            msg: _context4.t0,
            status: false
          }));

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 7]]);
};