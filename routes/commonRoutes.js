const express = require('express')
const router = express.Router()
const {
    addDepart,
    getDepartmentList,
    updateDepartment,
    deleteDepartment
} = require('../controllers/department');
const {
    addRole,
    getRole,
    updateRole,
    deleteRole
} = require('../controllers/role');
const isAdmin = require('../middilewere/isAdmin');
const {
    addPosition,
    updatePosition,
    getPositionList,
    deletePosition
} = require('../controllers/position')

///// department

router.post('/addDeprt', isAdmin.isAdminHr, addDepart);
router.get('/getDepartmentList', isAdmin.isAdminHr, getDepartmentList);
router.patch('/updateDepartment/:id', isAdmin.isAdminHr, updateDepartment);
router.delete('/delete/:id', isAdmin.isAdminHr, deleteDepartment);

/////// role

router.post('/addRole', isAdmin.isAdminHr, addRole)
router.get('/getRole', isAdmin.isAdminHr, getRole)
router.patch('/updateRole/:id', isAdmin.isAdminHr, updateRole)
router.delete('/deleteRole/:id', isAdmin.isAdminHr, deleteRole)

////// posistion
router.post("/addPosition", isAdmin.isAdminHr, addPosition)
router.patch("/updatePosition/:id", isAdmin.isAdminHr, updatePosition)
router.get("/getPositionList", isAdmin.isAdminHr, getPositionList)
router.delete("/deletePosition/:id", isAdmin.isAdminHr, deletePosition)

// //////  Get personal detai




module.exports = router;