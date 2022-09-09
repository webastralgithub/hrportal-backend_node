"use strict";

var mongoose = require('mongoose');

var AutoIncrement = require('mongoose-sequence')(mongoose);

var FamilyInfoSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Relationship: {
    type: String,
    required: true
  },
  DOB: {
    type: Date,
    required: true
  },
  Occupation: {
    type: String,
    required: true
  },
  Employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee"
  }
});
FamilyInfoSchema.plugin(AutoIncrement, {
  id: "FamilyInfoID_seq",
  inc_field: "FamilyInfoID"
});
module.exports = mongoose.model("FamilyInfo", FamilyInfoSchema);