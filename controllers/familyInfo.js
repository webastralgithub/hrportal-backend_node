const Employee = require("../models/Employee")
const FamilyInfo = require("../models/FamilyInfo")

exports.addDetails = async (req, res) => {
    const employeeId = req.params.employeeId
    try {
        const employee = await Employee.findOne({
            _id: employeeId
        })
        let newEntry = {
            Name:req.body.Name,
            Relationship:req.body.Relationship,
            DOB:req.body.DOB,
            Occupation:req.body.Occupation,
            Employee:employeeId
        }
      await FamilyInfo.create(newEntry,(err,details)=>{
          if(err){
              console.log(err)
          }else{
              employee.familyInfo.push(details)
              employee.save((err,data)=>{
                  if(err){
                      console.log(err);
                  }else{
                      return res.status(200).json({status:true,data:data})
                  }
              })
          }
      })


    } catch (error) {
        return res.status(500).json(error)
    }
}


exports.getfamilyDetails = async(req,res)=>{
    const employeeId = req.params.id
    try {
        const familyDetails = await FamilyInfo.find({employee:employeeId})
        return res.status(200).json({status:true,data:familyDetails})

    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.updateFamilyDetails = async (req,res)=>{
    const familyDetailsId = req.params.id
    try {
        const updateData = await FamilyInfo.findByIdAndUpdate(familyDetailsId,req.body,{new:true})
        return res.status(200).json({status:true,data:updateData})

    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.deleteFamilyDetails = async(req,res)=>{
    const detailsId = req.params.detailsId
    try {
        const findAndDelete = await FamilyInfo.findByIdAndRemove(detailsId)
        return res.status(200).json({status:true,msg:"Data deleted"})


    } catch (error) {
        return res.status(500).json(error)
    }
}
