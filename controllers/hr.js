// const LeaveApplication = require("../models/LeaveApplication")
const Employee = require("../models/Employee")
const LeaveApplication = require("../models/LeaveApplication")
const UserRole = require("../models/UserRole")
const Position = require("../models/Position")
const Department = require("../models/Department")


exports.updateApplicationStatus = async (req, res) => {
    const appId = req.params.id
    console.log(req.body.Status);
    try {
        const find = await LeaveApplication.findById(appId)
        const updateStatusApplication = await LeaveApplication.findByIdAndUpdate(appId, {
            Status: req.body.Status
        },{new:true})
        res.json({status:true,data:updateStatusApplication,msg:"Application Updated"})
        // if (req.body.Status == "1") {
        //     return res.status(200).json({
        //         status: true,
        //         msg: "Your Application in pending"
        //     })

        // } else if (req.body.Status == "2") {
        //     return res.status(200).json({
        //         status: true,
        //         msg: "Your Application was rejected"
        //     })

        // } else {
        //     return res.status(200).json({
        //         status: true,
        //         msg: "Your Application was approoved"
        //     })

        // }

    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
exports.rejectStatus = async (req, res) => {
    const appId = req.params.appId
    try {
        const rejectApplication = await LeaveApplication.findByIdAndUpdate(appId, {
            Status: "2"
        })
        return res.status(200).json({
            status: true,
            msg: "Application was rejectrd"
        })

    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.approoveStatus = async (req, res) => {
    const appId = req.params.appId
    try {
        const approoveApplication = await LeaveApplication.findByIdAndUpdate(appId, {
            Status: "3"
        })
        return res.status(200).json({
            status: true,
            msg: "Application was approove"
        })

    } catch (error) {
        return res.status(500).json(error)
    }
}


exports.masterApiForDrop = async(req,res)=>{
    try {
        const role= await UserRole.find()
        const position = await Position.find()
        const department = await Department.find()

        return res.json({
            role:role,position:position,department:department
        })

    } catch (error) {
        res.status(500).json(error)
    }
}
