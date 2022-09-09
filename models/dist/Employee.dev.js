"use strict";

var mongoose = require('mongoose');

var Increment = require('mongoose-sequence')(mongoose);

var employeeSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  MiddleName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  Employee_ID: {
    type: Number
  },
  DOB: {
    type: Date,
    required: true
  },
  DateOfJoining: {
    type: Date,
    required: true
  },
  TerminateDate: {
    type: Date
  },
  Deleted: {
    type: Boolean,
    "default": false
  },
  Photo: {
    type: String,
    "default": null
  },
  ContactNo: {
    type: String,
    required: true
  },
  EmployeeCode: {
    type: String,
    required: true
  },
  Account: {
    type: String,
    required: true
  },
  roleType: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role"
  }],
  position: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Position"
  }],
  department: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  }],
  salary: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Salary"
  }],
  education: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Education"
  }],
  familyInfo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "FamilyInfo"
  }],
  workExperience: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkExperience"
  }],
  leaveApplication: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "LeaveApplication"
  }],
  BloodGroup: {
    type: String
  },
  EmergencyContactNo: {
    type: String
  },
  Hobbies: [{
    type: String
  }],
  PANcardNo: {
    type: String
  },
  PermanetAddress: {
    type: String
  },
  PresentAddress: {
    type: String
  }
});
employeeSchema.plugin(Increment, {
  id: "Employee_ID_seq",
  inc_field: "Employee_ID"
});
module.exports = mongoose.model("Employee", employeeSchema);