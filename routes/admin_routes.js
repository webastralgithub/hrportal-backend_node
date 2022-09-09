const express = require('express')
const router = express.Router()



const isAdminHr = require('../middilewere/isAdmin')


//////////   role routes

// router.post('/addEmployee',isAdminHr.isAdminHr,addRole)
// router.get('/listRole',isAdminHr.isAdminHr,getRole)

//////////   Position

// router.post("/addPosition",isAdminHr.isAdminHr,addPosition)
// router.patch("/updatePosition/:id",isAdminHr.isAdminHr,updatePosition)
// router.get("/getList",isAdminHr.isAdminHr,getList)


module.exports = router