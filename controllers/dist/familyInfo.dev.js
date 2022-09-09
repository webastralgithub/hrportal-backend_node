"use strict";

var Employee = require("../models/Employee");

var FamilyInfo = require("../models/FamilyInfo");

exports.addDetails = function _callee(req, res) {
  var employeeId, employee, newEntry;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          employeeId = req.params.employeeId;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Employee.findOne({
            _id: employeeId
          }));

        case 4:
          employee = _context.sent;
          newEntry = {
            Name: req.body.Name,
            Relationship: req.body.Relationship,
            DOB: req.body.DOB,
            Occupation: req.body.Occupation,
            Employee: employeeId
          };
          _context.next = 8;
          return regeneratorRuntime.awrap(FamilyInfo.create(newEntry, function (err, details) {
            if (err) {
              console.log(err);
            } else {
              employee.familyInfo.push(details);
              employee.save(function (err, data) {
                if (err) {
                  console.log(err);
                } else {
                  return res.status(200).json({
                    status: true,
                    data: data
                  });
                }
              });
            }
          }));

        case 8:
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.getfamilyDetails = function _callee2(req, res) {
  var employeeId, familyDetails;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          employeeId = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(FamilyInfo.find({
            employee: employeeId
          }));

        case 4:
          familyDetails = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: true,
            data: familyDetails
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

exports.updateFamilyDetails = function _callee3(req, res) {
  var familyDetailsId, updateData;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          familyDetailsId = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(FamilyInfo.findByIdAndUpdate(familyDetailsId, req.body, {
            "new": true
          }));

        case 4:
          updateData = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: true,
            data: updateData
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

exports.deleteFamilyDetails = function _callee4(req, res) {
  var detailsId, findAndDelete;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          detailsId = req.params.detailsId;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(FamilyInfo.findByIdAndRemove(detailsId));

        case 4:
          findAndDelete = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            status: true,
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