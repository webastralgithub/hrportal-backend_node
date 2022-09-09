"use strict";

var express = require('express');

var _require = require('../middilewere/isAdmin'),
    isEmp = _require.isEmp,
    isHr = _require.isHr,
    isHrEmp = _require.isHrEmp;

var Employee = require('../models/Employee');

var UserRole = require('../models/UserRole');

var router = express.Router();

var _require2 = require('../controllers/employee'),
    applyApplication = _require2.applyApplication,
    getApplicationList = _require2.getApplicationList,
    updateApplicationByHr = _require2.updateApplicationByHr,
    getLeaveApplicationsByEmp = _require2.getLeaveApplicationsByEmp,
    addPersonalDetails = _require2.addPersonalDetails,
    updateImg = _require2.updateImg;

var _require3 = require('../controllers/education'),
    addEduction = _require3.addEduction,
    deleteEduction = _require3.deleteEduction,
    getAllEducations = _require3.getAllEducations,
    getEmployeeEducationByEmployee = _require3.getEmployeeEducationByEmployee;

var _require4 = require('../controllers/workExp'),
    addWorkExp = _require4.addWorkExp,
    getWorkExperienceByEpm = _require4.getWorkExperienceByEpm,
    updateWorkExp = _require4.updateWorkExp,
    deleteExperience = _require4.deleteExperience;

var _require5 = require('../controllers/familyInfo'),
    addDetails = _require5.addDetails,
    getfamilyDetails = _require5.getfamilyDetails,
    updateFamilyDetails = _require5.updateFamilyDetails,
    deleteFamilyDetails = _require5.deleteFamilyDetails; //  Leave application routes


router.post('/applyApplication/:id', isEmp, applyApplication);
router.get('/getApplicationList', isHr, getApplicationList);
router.patch('/updateApplicationByHr/:id', isHr, updateApplicationByHr);
router.get('/getLeaveApplicationsByEmp/:id', isEmp, getLeaveApplicationsByEmp); // Education routes

router.post('/addEducation/:id', isEmp, addEduction);
router["delete"]('/deleteEduction/:id', isEmp, deleteEduction);
router.get('/getAllEducations', isEmp, getAllEducations);
router.get('/getEmployeeEducationByEmployee/:id', isEmp, getEmployeeEducationByEmployee); // Work exp routes

router.post("/addWorkExp/:id", isEmp, addWorkExp);
router["delete"]("/deleteExperience/:id", isEmp, deleteExperience);
router.get("/getWorkExperienceByEpm/:id", isEmp, getWorkExperienceByEpm);
router.patch("/updateWorkExp/:id", isEmp, updateWorkExp); // family details routes

router.post("/addDetails/:employeeId", isEmp, addDetails);
router["delete"]("/deleteFamilyDetails/:id", isEmp, deleteFamilyDetails);
router.get("/getfamilyDetails/:id", isEmp, getfamilyDetails);
router.patch("/updateFamilyDetails/:id", isEmp, updateFamilyDetails); // personal details routes

router.put("/addPersonalDetails/:employeeId", isEmp, addPersonalDetails);
router.put("/updateImg/:employeeId", isEmp, updateImg);
module.exports = router;