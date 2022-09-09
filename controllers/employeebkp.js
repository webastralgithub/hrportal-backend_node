const Employee = require('../models/Employee')
const bcrypt = require('bcrypt')
const LeaveApplication = require('../models/LeaveApplication')
const transporter = require('../services/tranport')
const multer = require('multer')
const { find } = require('../models/Position')


exports.addEmployee = async (req, res) => {


    try {
        const check = await Employee.findOne({
            Email: req.body.Email
        })
        const storage = multer.diskStorage({
            destination: (req,file,cd)=>{
                cd(null,"./uploads/employee")
            },
            filename:(req,file,cb)=>{
                cb(null,file.originalname)
            }
        })
        var upload = multer({
            storage:storage
        }).any()

        if (check != null) {
            if (check.Email == req.body.Email) {
                return res.status(409).json({
                    status: false,
                    msg: "email already exist"
                })

            }
        } else {

            console.log(req.body._id);
            const newEmp = new Employee({
                Email: req.body.Email,
                Password: req.body.Password,
                roleType: req.body.userRoleId,
                Account: req.body.Account,
                Gender: req.body.Gender,
                FirstName: req.body.FirstName,
                MiddleName: req.body.MiddleName,
                LastName: req.body.LastName,
                DOB: req.body.DOB,
                DateOfJoining: req.body.DateOfJoining,
                EmployeeCode: req.body.EmployeeCode,
                ContactNo: req.body.ContactNo,
                TerminateDate: req.body.TerminateDate,
                position: req.body.positionId,
                department: req.body.departId,
            })
            newEmp.Password = await bcrypt.hash(req.body.Password, 10)
            const saveEmp = await newEmp.save()
            return res.status(200).json({
                status: true,
                data: saveEmp
            })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            msg: error
        })
    }
}

exports.updateEmp = async (req, res) => {
    const id = req.params.id
    try {
        const newEmp = {
            Email: req.body.Email,
            roleType: req.body.userRoleId,
            Account: req.body.Account,
            Gender: req.body.Gender,
            FirstName: req.body.FirstName,
            MiddleName: req.body.MiddleName,
            LastName: req.body.LastName,
            DOB: req.body.DOB,
            DateOfJoining: req.body.DateOfJoining,
            EmployeeCode: req.body.EmployeeCode,
            ContactNo: req.body.ContactNo,
            TerminateDate: req.body.TerminateDate,
            positionName: req.body.positionId,
            departmentName: req.body.departId,
        }
        const updateData = await Employee.findByIdAndUpdate(id, newEmp, {
            new: true
        })
        return res.status(200).json({
            data: updateData,
            msg: "Data updated"
        })

    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.updateImg = async(req,res)=>{
    const employeeId = req.params.employeeId


    const storage = multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,"./uploads/employee")
        
        },
        filename:(req,file,cb)=>{
            cb(null,file.originalname)
        }
    })
    var upload = multer({
        storage:storage
    }).any()

upload(req,res,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(req.files);
        req.files.forEach(async(element) => {
            console.log();
            const updateProfileImg = await Employee.updateOne(
                {_id:employeeId},
                {$set:{Photo:element.originalname}}
            )
            if(updateProfileImg){
                return res.status(200).json({status:true,msg:"Image uploaded successfully"})
            }else{
                return res.status(422).json({status:true,msg:"Image not uploaded"})

            }
        });
    }
})

}



exports.getEpmList = async (req, res) => {

    try {
       
        await Employee.find().populate({
                path: "roleType position department"
            })
            .select("-salary -education -familyInfo -workExperience -Password").exec((err, data) => {
                if (err) {
                    console.log(err);
                } else {

                    res.json({
                        data: data
                    })
                }
            })

    } catch (error) {
        return res.status(500).json({
            status: false,
            msg: error
        })
    }
}

exports.getEmpDetails = async (req, res) => {
    const empId = req.params.id
    try {
        const getEmp = await Employee.findById(empId)
        // const saveEmp = await addEmployee.save()
        return res.status(200).json({
            status: true,
            data: getEmp
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            msg: error
        })
    }
}
exports.applyApplication = async (req, res) => {
    const id = req.params.id

    try {
        const employee = await Employee.findById(id)
        // console.log(employee);
        // if(employee.leaveApplication.length==0){
        let newApplication = {
            Leavetype: req.body.Leavetype,
            FromDate: req.body.FromDate,
            ToDate: req.body.ToDate,
            Reasonforleave: req.body.Reasonforleave,
            Status: req.body.Status,
            employee: id
        }
        await LeaveApplication.create(newApplication, (err, application) => {
            if (err) {
                res.json(err)
            } else {
                employee.leaveApplication.push(application)
                employee.save((err, data) => {
                    if (err) {
                        res.json("err")
                    } else {
                        // const linkForAproov = "<button href='' style='color:green;backgound:white' >Approov</button>"
                        // const linkForReject = "<button href='' style='color:red'>Reject</button>"
                        const message = ` ${req.body.Reasonforleave} `

                        transporter.sendApplication(employee.Email, `Application For ${req.body.Leavetype}`, message)

                        res.status(200).json({
                            data: data,
                            status: true
                        })

                    }
                })
            }
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            msg: error
        })
    }
}

exports.getApplicationList = async (req, res) => {
    try {
        const applications = await LeaveApplication.find()
        return res.status(200).json({
            data: applications
        })
    } catch (error) {
        return res.status(500).json(error)

    }
}
// exports.updateApplicationByHr = async (req, res) => {
//     const id = req.params.appId
//     try {
//         const status = {
//             Status: req.body.Status
//         }
//         await LeaveApplication.findByIdAndUpdate(id, status, {
//             new: true
//         })
//         return res.status(200).json({
//             status: true,
//             msg: "application status updated"
//         })

//     } catch (error) {
//         return res.status(500).json(error)
//     }
// }
exports.getLeaveApplicationsByEmp = async (req, res) => {
    const userId = req.params.id
    try {
        const leaveApplication = await LeaveApplication.find({
            employee: userId
        })
        return res.status(200).json({
            status: true,
            data: leaveApplication
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}
//  update personal details

exports.addPersonalDetails = async (req, res) => {
    const employeeId = req.params.employeeId
    const {
        BloodGroup,
        EmergencyContactNo,
        Hobbies,
        PANcardNo,
        PermanetAddress,
        PresentAddress
    } = req.body
    try {
        const addDetails = {
            BloodGroup,
            EmergencyContactNo,
            Hobbies,
            PANcardNo,
            PermanetAddress,
            PresentAddress
        }
        const updateDetails = await Employee.findByIdAndUpdate(employeeId, addDetails, {
            new: true
        })
        return res.status(200).json({
            status: true,
            data: updateDetails,
            msg: "Personal details added"
        })
        


    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.getPersonalDetailsByEmp = async(req,res)=>{
const employeeId = req.params.employeeId
try {
    const getDetails = await Employee.findOne({_id: employeeId})
    return res.status(200).json({status:true,data:getDetails})
    
} catch (error) {
    return res.status(500).json({error})
}
}