const express = require('express')
const router = express.Router()
const {
    addEmployee,
    getEpmList,
    getEmpDetails,
    updateEmp,
    deleteEmployee,
    deleteAllEmployee
} = require('../controllers/employee')
const { updateApplicationStatus, masterApiForDrop } = require('../controllers/hr')
const { addSalary, getSalary, deleteSalary, updateSalary } = require('../controllers/salary')
const isHr = require('../middilewere/isAdmin')
///// role

// router.post('/addEmployee',isHr.isHr,addRole)
// router.get('/listRole',isHr.isHr,getRole)

//////// employee routes

router.post('/addEmployee', isHr.isHr, addEmployee)
router.get('/getEpmList', isHr.isHr, getEpmList)
router.post('/getEmpDetails/:id', isHr.isHr, getEmpDetails)
router.patch('/update/:id', isHr.isHr, updateEmp)
router.delete("/deleteEmployee/:id", isHr.isHr, deleteEmployee)
router.delete("/deleteAllEmployee", isHr.isHr, deleteAllEmployee)


//////// salary routes


router.post('/addSalary/:id', isHr.isHr, addSalary)
router.get('/getSalary', isHr.isHr, getSalary)
router.delete('/deleteSalary/:id', isHr.isHr, deleteSalary)
router.patch('/updateSalary/:id', isHr.isHr, updateSalary)

// leave application update by HR

router.patch('/updateApplicationStatus/:id', isHr.isHr, updateApplicationStatus)
router.get("/dropdown", masterApiForDrop)

module.exports = router