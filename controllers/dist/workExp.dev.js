"use strict";

var Employee = require("../models/Employee");

var WorkExperience = require("../models/WorkExperience");

exports.addWorkExp = function _callee(req, res) {
  var employeeId, employee, newEntry, findExp;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          employeeId = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Employee.findById(employeeId));

        case 4:
          employee = _context.sent;
          newEntry = {
            CompanyName: req.body.CompanyName,
            Tech: req.body.Tech,
            Designation: req.body.Designation,
            FromDate: req.body.FromDate,
            ToDate: req.body.ToDate
          };
          _context.next = 8;
          return regeneratorRuntime.awrap(WorkExperience.findOne({
            CompanyName: req.body.CompanyName
          }));

        case 8:
          findExp = _context.sent;

          if (!(findExp == null)) {
            _context.next = 14;
            break;
          }

          _context.next = 12;
          return regeneratorRuntime.awrap(WorkExperience.create(newEntry, function (err, work) {
            if (err) {
              return res.status(403);
            } else {
              employee.workExperience.push(work);
              employee.save(function (err, data) {
                if (err) {
                  return res.status(403);
                } else {
                  return res.status(200).json({
                    status: true,
                    data: data
                  });
                }
              });
            }
          }));

        case 12:
          _context.next = 15;
          break;

        case 14:
          return _context.abrupt("return", res.status(403).json({
            status: false,
            msg: "Experience already exist with this company"
          }));

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).jjson(_context.t0));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 17]]);
};

exports.getWorkExperienceByHr = function _callee2(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(WorkExperience.find());

        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: true,
            data: data
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

exports.deleteExperience = function _callee3(req, res) {
  var expId, removeExp;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          expId = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(WorkExperience.findByIdAndRemove(expId));

        case 4:
          removeExp = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: true,
            msg: "Exprerience Deleted"
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

exports.getWorkExperienceByEpm = function _callee4(req, res) {
  var employeeId, data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          employeeId = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(WorkExperience.find({
            employee: employeeId
          }));

        case 4:
          data = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            status: true,
            data: data
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

exports.updateWorkExp = function _callee5(req, res) {
  var workExpId, updateWorkExp;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          workExpId = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(WorkExperience.findByIdAndUpdate(workExpId, req.body, {
            "new": true
          }));

        case 4:
          updateWorkExp = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            status: true,
            msg: "Experience updated successfully"
          }));

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", res.status(500).json(500));

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
};