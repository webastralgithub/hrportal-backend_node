const express = require("express")
const router = express.Router()
const {login} = require('../controllers/auth')
const { singup, loginUser, getUserList } = require("../controllers/user")

router.post("/login",login)
router.post("/register",singup)
router.post("/loginUser",loginUser)
router.get("/getUserList",getUserList)
router.post("/signup", singup);



module.exports = router;