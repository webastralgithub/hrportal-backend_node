const Attendence = require("../models/Attendence")

exports.login= async(req,res)=>{
    const id = req.params.id

    try {
// const check = await Attendence.find({createdAt:})

const login ={
    login:req.body.login,
    Employee:id,
    type:req.body.login?"Persent":null
}
const loginAttendence = new Attendence(login)
const saveAtt = await loginAttendence.save()
return res.json({status:true,data:saveAtt,msg:"Attendence Login Successfully."})
    



    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.logout= async(req,res)=>{
    const id = req.params.id

    try {
// const check = await Attendence.find({createdAt:})

const logout =req.body.logout

const findAtt = await Attendence.findByIdAndUpdate(id,logout,{new:true})

return res.json({status:true,data:findAtt,msg:"Attendence Logout Successfully."})
    



    } catch (error) {
        return res.status(500).json(error)
    }
}