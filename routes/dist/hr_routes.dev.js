"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/employee'),
    addEmployee = _require.addEmployee,
    getEpmList = _require.getEpmList,
    getEmpDetails = _require.getEmpDetails,
    updateEmp = _require.updateEmp;

var _require2 = require('../controllers/hr'),
    updateApplicationStatus = _require2.updateApplicationStatus;

var _require3 = require('../controllers/salary'),
    addSalary = _require3.addSalary,
    getSalary = _require3.getSalary,
    deleteSalary = _require3.deleteSalary,
    updateSalary = _require3.updateSalary;

var isHr = require('../middilewere/isAdmin'); ///// role
// router.post('/addEmployee',isHr.isHr,addRole)
// router.get('/listRole',isHr.isHr,getRole)
//////// employee routes


router.post('/addEmployee', isHr.isHr, addEmployee);
router.get('/getEpmList', isHr.isHr, getEpmList);
router.post('/getEmpDetails/:id', isHr.isHr, getEmpDetails);
router.patch('/update/:id', isHr.isHr, updateEmp); //////// salary routes

router.post('/addSalary/:id', isHr.isHr, addSalary);
router.get('/getSalary', isHr.isHr, getSalary);
router["delete"]('/deleteSalary/:id', isHr.isHr, deleteSalary);
router.patch('/updateSalary/:id', isHr.isHr, updateSalary); // leave application update by HR

router.patch('/updateApplicationStatus/:appId', isHr.isHr, updateApplicationStatus);
module.exports = router;