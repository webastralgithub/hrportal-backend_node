"use strict";

var Position = require("../models/Position");

exports.addPosition = function _callee(req, res) {
  var postion, addPostion, savePosition;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Position.findOne({
            positionName: req.body.positionName
          }));

        case 3:
          postion = _context.sent;

          if (!(postion == null)) {
            _context.next = 12;
            break;
          }

          addPostion = new Position(req.body);
          _context.next = 8;
          return regeneratorRuntime.awrap(addPostion.save());

        case 8:
          savePosition = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            status: true,
            data: savePosition
          }));

        case 12:
          return _context.abrupt("return", res.status(409).json({
            msg: "This Positon already exist in table"
          }));

        case 13:
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

exports.updatePosition = function _callee2(req, res) {
  var id, check, update;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Position.findById(id));

        case 4:
          check = _context2.sent;

          if (!(check != null)) {
            _context2.next = 14;
            break;
          }

          if (!(check.positionName == req.body.positionName)) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", res.status(409).json({
            status: false,
            msg: "Position already exist"
          }));

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(Position.findByIdAndUpdate(id, req.body, {
            "new": true
          }));

        case 12:
          update = _context2.sent;
          return _context2.abrupt("return", res.status(201).json({
            msg: "updated",
            data: update
          }));

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json(_context2.t0);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 16]]);
};

exports.getPositionList = function _callee3(req, res) {
  var list;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Position.find());

        case 3:
          list = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: true,
            data: list
          }));

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json(_context3.t0));

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deletePosition = function _callee4(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Position.findOneAndDelete(id));

        case 4:
          return _context4.abrupt("return", res.status(200).json({
            status: true,
            msg: "Data deleted"
          }));

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", res.status(500).json(_context4.t0));

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 7]]);
};