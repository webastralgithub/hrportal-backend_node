"use strict";

var Employee = require('../models/Employee');

var Salary = require('../models/Salary');

exports.addSalary = function _callee(req, res) {
  var id, employee, newSalary;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Employee.findOne({
            _id: id
          }));

        case 4:
          employee = _context.sent;
          console.log(employee);

          if (!(employee.salary.length == 0)) {
            _context.next = 12;
            break;
          }

          newSalary = {
            BasicSalary: req.body.BasicSalary,
            BankName: req.body.BankName,
            AccountNo: req.body.AccountNo,
            AccountHolderName: req.body.AccountHolderName,
            IFSCcode: req.body.IFSCcode,
            TaxDeduction: req.body.TaxDeduction,
            Employee: id
          };
          _context.next = 10;
          return regeneratorRuntime.awrap(Salary.create(newSalary, function (err, salary) {
            if (err) {
              res.json("err");
            } else {
              employee.salary.push(salary);
              employee.save(function (err, data) {
                if (err) {
                  console.log(err);
                  res.json("err");
                } else {
                  res.json(data);
                }
              });
              console.log("salary saved");
            }
          }));

        case 10:
          _context.next = 13;
          break;

        case 12:
          res.status(403).json("Salary Information about this employee already exits");

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json(_context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 15]]);
};

exports.getSalary = function _callee2(req, res) {
  var listOfSalary;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Employee.find().populate({
            path: "salary"
          }).select("FirstName MiddleName LastName"));

        case 3:
          listOfSalary = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            data: listOfSalary
          }));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            data: _context2.t0
          }));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deleteSalary = function _callee3(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Employee.findById({
            _id: id
          }, function (err, employee) {
            if (err) {
              console.log(err);
            } else {
              //  console.log("uuuuuuuunnnnnnnnnnnnnnndef",employee.salary[0]);
              Salary.findByIdAndRemove({
                _id: employee.salary[0]
              }, function (err, salary) {
                if (!err) {
                  Employee.update({
                    _id: id
                  }, {
                    $pull: {
                      salary: employee.salary[0]
                    }
                  }, function (err, data) {
                    console.log(data);
                    res.json(data);
                  });
                }
              });
            }
          }));

        case 4:
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).json(_context3.t0));

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 6]]);
};

exports.updateSalary = function _callee4(req, res) {
  var id, newSalary, emp;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          newSalary = {
            BasicSalary: req.body.BasicSalary,
            BankName: req.body.BankName,
            AccountHolderName: req.body.AccountHolderName,
            IFSCcode: req.body.IFSCcode,
            TaxDeduction: req.body.TaxDeduction
          }; // console.log(newSalary);

          _context4.next = 5;
          return regeneratorRuntime.awrap(Salary.findByIdAndUpdate({
            _id: id
          }, newSalary, {
            "new": true
          }));

        case 5:
          emp = _context4.sent;
          res.json({
            data: emp
          });
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", res.status(500).json(_context4.t0));

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 9]]);
};