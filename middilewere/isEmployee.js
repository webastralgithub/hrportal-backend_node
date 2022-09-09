const jwt = require("jsonwebtoken")

module.exports= {
    isEmp:(req,res,next)=>{
        const token = req.header("token")
        if(!token)  return res.status(401).json('Access Denied');
const verified =  jwt.verify(token,"jhsjhdsjhdjdfhgfbsfjfdhfj")
if(verified.roleType==="3"){
    next()
}else{
    res.status(403).json("You are not allowed to access this route!!")
}

    }
}