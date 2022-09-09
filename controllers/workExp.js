const Employee = require("../models/Employee")
const WorkExperience = require("../models/WorkExperience")


// add exp
exports.addWorkExp= async(req,res)=>{
    const employeeId = req.params.id
    try {
const employee = await Employee.findById(employeeId)
let newEntry = {
    CompanyName: req.body.CompanyName,
    Tech: req.body.Tech,
    Designation: req.body.Designation,
    FromDate: req.body.FromDate,
    ToDate: req.body.ToDate,
    employee:employeeId
}
const findExp = await WorkExperience.findOne({CompanyName:req.body.CompanyName,employee:employeeId})
console.log(findExp);
if(findExp == null){
        await WorkExperience.create(newEntry,(err,work)=>{
            if(err){
                return res.status(403)
            }else{
                employee.workExperience.push(work)
                employee.save((err,data)=>{
                    if(err){
                        return res.status(403)
                    }else{
                        return res.status(200).json({status:true,data:data})
                    }
                })
            }
        })
}else{
    return res.status(403).json({status:false,msg:"Experience already exist with this company"})
}

    } catch (error) {
        return res.status(500).jjson(error)
    }
}

// get exp


exports.getWorkExperienceByHr=async (req,res)=>{
    try {
        const data = await WorkExperience.find()
        return res.status(200).json({status:true,data:data})
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.deleteExperience = async (req,res)=>{
    const expId = req.params.id
    try {
        const removeExp = await WorkExperience.findByIdAndRemove(expId)
        return res.status(200).json({status:true,msg:"Exprerience Deleted"})
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.getWorkExperienceByEpm= async(req,res)=>{
    const employeeId = req.params.id
    try {
        const data = await WorkExperience.find({employee:employeeId})
        return res.status(200).json({status:true,data:data})
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.updateWorkExp= async(req,res)=>{
    const workExpId = req.params.id
    try {
        const updateWorkExp = await WorkExperience.findByIdAndUpdate(workExpId,req.body,{new:true})
        return res.status(200).json({status:true,msg:"Experience updated successfully"})
    } catch (error) {
        return res.status(500).json(500)
    }
}

exports.deleteAllExp = async(req,res)=>{
    try {
        const deleteData = await WorkExperience.deleteMany()
        return res.status(200).json({deleteData})
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.getAllExp=async(req,res)=>{
    try {
const data = await WorkExperience.find()
return res.status(200).json({data:data})

        
    } catch (error) {
        return res.status(500).json(error)
    }
}