const express = require('express')
const { isEmp, isHr, isHrEmp } = require('../middilewere/isAdmin')
const Employee = require('../models/Employee')
const UserRole = require('../models/UserRole')
const router = express.Router()
const { applyApplication, getApplicationList, updateApplicationByHr, getLeaveApplicationsByEmp,
     addPersonalDetails, updateImg, getPersonalDetailsByEmp } = require('../controllers/employee')
const { addEduction, deleteEduction, getAllEducations, getEmployeeEducationByEmployee } = require('../controllers/education')
const { addWorkExp, getWorkExperienceByEpm, updateWorkExp, deleteExperience, deleteAllExp, getAllExp } = require('../controllers/workExp')
const { addDetails, getfamilyDetails, updateFamilyDetails, deleteFamilyDetails } = require('../controllers/familyInfo')
const { login, logout } = require('../controllers/attendence')


//  Leave application routes

router.post('/applyApplication/:id', isEmp, applyApplication)
router.get('/getApplicationList', isHr, getApplicationList)
// router.patch('/updateApplicationByHr/:id',isHr,updateApplicationByHr)
router.get('/getLeaveApplicationsByEmp/:id', isEmp, getLeaveApplicationsByEmp)

// Education routes

router.post('/addEducation/:id', isEmp, addEduction)
router.delete('/deleteEduction/:id', isEmp, deleteEduction)
router.get('/getAllEducations', isEmp, getAllEducations)
router.get('/getEmployeeEducationByEmployee/:id', isEmp, getEmployeeEducationByEmployee)

// Work exp routes

router.post("/addWorkExp/:id", isEmp, addWorkExp)
router.delete("/deleteExperience/:id", isEmp, deleteExperience)
router.get("/getWorkExperienceByEpm/:id", isEmp, getWorkExperienceByEpm)
router.patch("/updateWorkExp/:id", isEmp, updateWorkExp)
router.delete("/deleteAll", deleteAllExp)
router.get("/getAllExp", getAllExp)

// family details routes

router.post("/addDetails/:employeeId", isEmp, addDetails)
router.delete("/deleteFamilyDetails/:id", isEmp, deleteFamilyDetails)
router.get("/getfamilyDetails/:id", isEmp, getfamilyDetails)
router.patch("/updateFamilyDetails/:id", isEmp, updateFamilyDetails)

// personal details routes
router.put("/addPersonalDetails/:employeeId", isEmp, addPersonalDetails)
router.get("/getPersonalDetailsByEmp/:employeeId", isEmp, getPersonalDetailsByEmp)
// router.put("/updateImg/:employeeId",isEmp,updateImg)

// Attendence employee
router.post("/loginAttendence",login)
router.patch("/logoutAttendence",logout)


module.exports = router;