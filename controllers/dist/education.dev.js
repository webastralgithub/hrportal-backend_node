"use strict";

var Education = require("../models/Education");

var Employee = require("../models/Employee");

exports.addEduction = function _callee(req, res) {
  var id, employee, newEduEntry, education;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Employee.findById(id));

        case 4:
          employee = _context.sent;
          // if (employee.education.length == 0) {
          newEduEntry = {
            SchoolUniversity: req.body.SchoolUniversity,
            Degree: req.body.Degree,
            Grade: req.body.Grade,
            PassingOfYear: req.body.PassingOfYear,
            Employee: id
          };
          _context.next = 8;
          return regeneratorRuntime.awrap(Education.findOne({
            Degree: req.body.Degree
          }));

        case 8:
          education = _context.sent;
          console.log(education);

          if (!(education == null)) {
            _context.next = 15;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(Education.create(newEduEntry, function (err, education) {
            if (err) {
              console.log("err");
            } else {
              employee.education.push(education);
              employee.save(function (err, data) {
                if (err) {
                  console.log(err);
                } else {
                  res.status(200).json({
                    status: true,
                    data: data,
                    msg: "Education added"
                  });
                }
              });
            }
          }));

        case 13:
          _context.next = 16;
          break;

        case 15:
          return _context.abrupt("return", res.status(403).json({
            status: false,
            msg: "This degree or class already exist"
          }));

        case 16:
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 18]]);
};

exports.deleteEduction = function _callee2(req, res) {
  var id, deleteData;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Education.findByIdAndRemove(id));

        case 4:
          deleteData = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: true,
            msg: "Deleted"
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

exports.getAllEducations = function _callee3(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Education.find());

        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: 200,
            data: data
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

exports.getEmployeeEducationByEmployee = function _callee4(req, res) {
  var employeeId, findEductions;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          employeeId = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Education.find({
            Employee: employeeId
          }));

        case 4:
          findEductions = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            status: true,
            data: findEductions
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