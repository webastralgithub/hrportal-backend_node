const mongoose = require("mongoose")
const Employee = require("../models/Employee")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
    try {
        const check = await Employee.findOne({ Email: req.body.Email })
      //   .populate({
      //     path: "Account Email FirstName MiddleName LastName"
      // })
      // .select("-salary -education -familyInfo -workExperience -Password").exec()
        
      
      // console.log(check);
      if(check==null){
        return res.status(401).json({status :false,msg:"Invalid Credentials!"})
      }else{
        if(check.Email==req.body.Email){
          const validPass = await bcrypt.compare(req.body.Password,check.Password)
          if(!validPass)  return res.status(401).json({status:false,msg:"invalid password"})
          const token = jwt.sign({_id:check._id,Account:check.Account,Email:check.Email,Name:check.FirstName+" "+check.MiddleName+" "+check.LastName},process.env.TOKEN_KEY)
          const decode = jwt.verify(token,process.env.TOKEN_KEY)
          
          return res.status(200).json({status:true,msg:"Login Successfully","token":token,userDetails:decode})
        }
      }
      

    } catch (error) {
return res.status(500).json(error)
    }
}