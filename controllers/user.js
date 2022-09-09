const req = require("express/lib/request")
const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const RoutesAccesseble = require("../models/angularproject/RoutesAccesseble")


exports.singup = async (req, res) => {
    try {
        const check = await User.findOne({ Email: req.body.Email })
        console.log(check);
        if (check) {
            return res.status(422).json({ status: false, msg: "user already exist!" })
        } else {

            const hashPass = await bcrypt.hash(req.body.Password, 10)

            const newEntry = {
                Name: req.body.Name,
                Password: hashPass,
                Email: req.body.Email,
                Role: req.body.Role

            }
            const addUser = new User(newEntry)
            // newEntry.Password = await bcrypt.hash(req.body.Password, 10)
            const saveUser = await addUser.save()
            return res.json({ status: true, data: saveUser })
        }


    } catch (error) {
        return res.status(500).json({ error })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const check = await User.findOne({ Email: req.body.Email })
        if (check == null) {
            return res.status(401).json({ status: false, msg: "Invalid Credentials!" })
        } else {
            if (check.Email == req.body.Email) {
                const validPass = await bcrypt.compare(req.body.Password, check.Password)
                if (!validPass) return res.status(401).json({ status: false, msg: "invalid password" })
                const token = jwt.sign({ _id: check._id, Account: check.Account, Email: check.Email, Name: check.Name ,Role:check.Role}, process.env.TOKEN_KEY)
                const decode = jwt.verify(token, process.env.TOKEN_KEY)
            // console.log('d',decode.Role);
                const routes = await RoutesAccesseble.find({ roleId:decode.Role})

                return res.status(200).json({ status: true, msg: "Login Successfully", "token": token, userDetails: decode,routes:routes })
            }
        }


    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.getUserList = async (req, res) => {
    try {
        const data = await User.find()
        return res.json({ data: data, status: true })

    } catch (error) {
        res.status(500).json(error)
    }
}
