"use strict";

var mongoose = require('mongoose');

var AutoIncrement = require('mongoose-sequence')(mongoose);

var SalarySchema = new mongoose.Schema({
  BasicSalary: {
    type: String,
    required: true
  },
  BankName: {
    type: String,
    required: true
  },
  AccountNo: {
    type: String,
    required: true
  },
  AccountHolderName: {
    type: String,
    required: true
  },
  IFSCcode: {
    type: String,
    required: true
  },
  TaxDeduction: {
    type: String,
    required: true
  },
  Employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee"
  },
  SalaryID: {
    type: Number
  }
});
SalarySchema.plugin(AutoIncrement, {
  id: "SalaryID_seq",
  inc_field: 'SalaryID'
});
module.exports = mongoose.model("Salary", SalarySchema);