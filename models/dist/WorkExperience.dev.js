"use strict";

var mongoose = require('mongoose');

var AutoIncrement = require('mongoose-sequence')(mongoose);

var workExperienceSchema = new mongoose.Schema({
  CompanyName: {
    type: String,
    required: true
  },
  Tech: {
    type: String,
    required: true
  },
  Designation: {
    type: String,
    required: true
  },
  FromDate: {
    type: Date,
    required: true
  },
  ToDate: {
    type: Date,
    required: true
  },
  employee: {
    type: String,
    required: true
  }
});
workExperienceSchema.plugin(AutoIncrement, {
  id: "workExperienceID_seq",
  inc_field: "workExperienceID"
});
module.exports = mongoose.model("WorkExperience", workExperienceSchema);