"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/department'),
    addDepart = _require.addDepart,
    getDepartmentList = _require.getDepartmentList,
    updateDepartment = _require.updateDepartment,
    deleteDepartment = _require.deleteDepartment;

var _require2 = require('../controllers/role'),
    addRole = _require2.addRole,
    getRole = _require2.getRole,
    updateRole = _require2.updateRole,
    deleteRole = _require2.deleteRole;

var isAdmin = require('../middilewere/isAdmin');

var _require3 = require('../controllers/position'),
    addPosition = _require3.addPosition,
    updatePosition = _require3.updatePosition,
    getPositionList = _require3.getPositionList,
    deletePosition = _require3.deletePosition; ///// department


router.post('/addDeprt', isAdmin.isAdminHr, addDepart);
router.get('/getDepartmentList', isAdmin.isAdminHr, getDepartmentList);
router.patch('/update/:id', isAdmin.isAdminHr, updateDepartment);
router["delete"]('/delete/:id', isAdmin.isAdminHr, deleteDepartment); /////// role

router.post('/addRole', isAdmin.isAdminHr, addRole);
router.get('/getRole', isAdmin.isAdminHr, getRole);
router.patch('/updateRole/:id', isAdmin.isAdminHr, updateRole);
router["delete"]('/deleteRole/:id', isAdmin.isAdminHr, deleteRole); ////// posistion

router.post("/addPosition", isAdmin.isAdminHr, addPosition);
router.patch("/updatePosition/:id", isAdmin.isAdminHr, updatePosition);
router.get("/getPositionList", isAdmin.isAdminHr, getPositionList);
router["delete"]("/delete/:id", isAdmin.isAdminHr, deletePosition);
module.exports = router;