"use strict";

var Employee = require('../models/Employee');

var bcrypt = require('bcrypt');

var LeaveApplication = require('../models/LeaveApplication');

var transporter = require('../services/tranport');

var multer = require('multer');

exports.addEmployee = function _callee(req, res) {
  var check, storage, upload, newEmp, saveEmp;
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
          storage = multer.diskStorage({
            destination: function destination(req, file, cd) {
              cd(null, "./uploads/employee");
            },
            filename: function filename(req, file, cb) {
              cb(null, file.originalname);
            }
          });
          upload = multer({
            storage: storage
          }).any();

          if (!(check != null)) {
            _context.next = 11;
            break;
          }

          if (!(check.Email == req.body.Email)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(409).json({
            status: false,
            msg: "email already exist"
          }));

        case 9:
          _context.next = 19;
          break;

        case 11:
          newEmp = new Employee({
            Email: req.body.Email,
            Password: req.body.Password,
            roleType: req.body._id,
            Account: req.body.Account,
            Gender: req.body.Gender,
            FirstName: req.body.FirstName,
            MiddleName: req.body.MiddleName,
            LastName: req.body.LastName,
            DOB: req.body.DOB,
            DateOfJoining: req.body.DateOfJoining,
            EmployeeCode: req.body.EmployeeCode,
            ContactNo: req.body.ContactNo,
            TerminateDate: req.body.TerminateDate,
            position: req.body._id,
            department: req.body._id
          });
          _context.next = 14;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.Password, 10));

        case 14:
          newEmp.Password = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(newEmp.save());

        case 17:
          saveEmp = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            status: true,
            data: saveEmp
          }));

        case 19:
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            status: false,
            msg: _context.t0
          }));

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 21]]);
};

exports.updateEmp = function _callee2(req, res) {
  var id, newEmp, updateData;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          newEmp = {
            Email: req.body.Email,
            roleType: req.body._id,
            Account: req.body.Account,
            Gender: req.body.Gender,
            FirstName: req.body.FirstName,
            MiddleName: req.body.MiddleName,
            LastName: req.body.LastName,
            DOB: req.body.DOB,
            DateOfJoining: req.body.DateOfJoining,
            EmployeeCode: req.body.EmployeeCode,
            ContactNo: req.body.ContactNo,
            TerminateDate: req.body.TerminateDate,
            position: req.body._id,
            department: req.body._id
          };
          _context2.next = 5;
          return regeneratorRuntime.awrap(Employee.findByIdAndUpdate(id, newEmp, {
            "new": true
          }));

        case 5:
          updateData = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            data: updateData,
            msg: "Data updated"
          }));

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", res.status(500).json(_context2.t0));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.updateImg = function _callee4(req, res) {
  var employeeId, storage, upload;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          employeeId = req.params.employeeId;
          storage = multer.diskStorage({
            destination: function destination(req, file, cb) {
              cb(null, "./uploads/employee");
            },
            filename: function filename(req, file, cb) {
              cb(null, file.originalname);
            }
          });
          upload = multer({
            storage: storage
          }).any();
          upload(req, res, function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log(req.files);
              req.files.forEach(function _callee3(element) {
                var updateProfileImg;
                return regeneratorRuntime.async(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log();
                        _context3.next = 3;
                        return regeneratorRuntime.awrap(Employee.updateOne({
                          _id: employeeId
                        }, {
                          $set: {
                            Photo: element.originalname
                          }
                        }));

                      case 3:
                        updateProfileImg = _context3.sent;

                        if (!updateProfileImg) {
                          _context3.next = 8;
                          break;
                        }

                        return _context3.abrupt("return", res.status(200).json({
                          status: true,
                          msg: "Image uploaded successfully"
                        }));

                      case 8:
                        return _context3.abrupt("return", res.status(422).json({
                          status: true,
                          msg: "Image not uploaded"
                        }));

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                });
              });
            }
          });

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getEpmList = function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Employee.find().populate({
            path: "roleType department position"
          }).select("-salary -education -familyInfo -workExperience -Password").exec(function (err, data) {
            if (err) {
              console.log(err);
            } else {
              res.json({
                data: data
              });
            }
          }));

        case 3:
          _context5.next = 8;
          break;

        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            status: false,
            msg: _context5.t0
          }));

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

exports.getEmpDetails = function _callee6(req, res) {
  var empId, getEmp;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          empId = req.params.id;
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Employee.findById(empId));

        case 4:
          getEmp = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            status: true,
            data: getEmp
          }));

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          return _context6.abrupt("return", res.status(500).json({
            status: false,
            msg: _context6.t0
          }));

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.applyApplication = function _callee7(req, res) {
  var id, employee, newApplication;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(Employee.findById(id));

        case 4:
          employee = _context7.sent;
          // console.log(employee);
          // if(employee.leaveApplication.length==0){
          newApplication = {
            Leavetype: req.body.Leavetype,
            FromDate: req.body.FromDate,
            ToDate: req.body.ToDate,
            Reasonforleave: req.body.Reasonforleave,
            Status: req.body.Status,
            employee: id
          };
          _context7.next = 8;
          return regeneratorRuntime.awrap(LeaveApplication.create(newApplication, function (err, application) {
            if (err) {
              res.json(err);
            } else {
              employee.leaveApplication.push(application);
              employee.save(function (err, data) {
                if (err) {
                  res.json("err");
                } else {
                  // const linkForAproov = "<button href='' style='color:green;backgound:white' >Approov</button>"
                  // const linkForReject = "<button href='' style='color:red'>Reject</button>"
                  var message = " ".concat(req.body.Reasonforleave, " ");
                  transporter.sendApplication(employee.Email, "Application For ".concat(req.body.Leavetype), message);
                  res.status(200).json({
                    data: data,
                    status: true
                  });
                }
              });
            }
          }));

        case 8:
          _context7.next = 13;
          break;

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](1);
          return _context7.abrupt("return", res.status(500).json({
            status: false,
            msg: _context7.t0
          }));

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.getApplicationList = function _callee8(req, res) {
  var applications;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(LeaveApplication.find());

        case 3:
          applications = _context8.sent;
          return _context8.abrupt("return", res.status(200).json({
            data: applications
          }));

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).json(_context8.t0));

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateApplicationByHr = function _callee9(req, res) {
  var id, status;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          _context9.prev = 1;
          status = {
            Status: req.body.Status
          };
          _context9.next = 5;
          return regeneratorRuntime.awrap(LeaveApplication.findByIdAndUpdate(id, status, {
            "new": true
          }));

        case 5:
          return _context9.abrupt("return", res.status(200).json({
            status: true,
            msg: "application status updated"
          }));

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](1);
          return _context9.abrupt("return", res.status(500).json(_context9.t0));

        case 11:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getLeaveApplicationsByEmp = function _callee10(req, res) {
  var userId, leaveApplication;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          userId = req.params.id;
          _context10.prev = 1;
          _context10.next = 4;
          return regeneratorRuntime.awrap(LeaveApplication.find({
            employee: userId
          }));

        case 4:
          leaveApplication = _context10.sent;
          return _context10.abrupt("return", res.status(200).json({
            status: true,
            data: leaveApplication
          }));

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](1);
          return _context10.abrupt("return", res.status(500).json(_context10.t0));

        case 11:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //  update personal details


exports.addPersonalDetails = function _callee11(req, res) {
  var employeeId, _req$body, BloodGroup, EmergencyContactNo, Hobbies, PANcardNo, PermanetAddress, PresentAddress, addDetails, updateDetails;

  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          employeeId = req.params.employeeId;
          _req$body = req.body, BloodGroup = _req$body.BloodGroup, EmergencyContactNo = _req$body.EmergencyContactNo, Hobbies = _req$body.Hobbies, PANcardNo = _req$body.PANcardNo, PermanetAddress = _req$body.PermanetAddress, PresentAddress = _req$body.PresentAddress;
          _context11.prev = 2;
          addDetails = {
            BloodGroup: BloodGroup,
            EmergencyContactNo: EmergencyContactNo,
            Hobbies: Hobbies,
            PANcardNo: PANcardNo,
            PermanetAddress: PermanetAddress,
            PresentAddress: PresentAddress
          };
          _context11.next = 6;
          return regeneratorRuntime.awrap(Employee.findByIdAndUpdate(employeeId, addDetails, {
            "new": true
          }));

        case 6:
          updateDetails = _context11.sent;
          return _context11.abrupt("return", res.status(200).json({
            status: true,
            data: updateDetails,
            msg: "Personal details added"
          }));

        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](2);
          return _context11.abrupt("return", res.status(500).json(_context11.t0));

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[2, 10]]);
};