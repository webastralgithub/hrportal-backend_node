const res = require("express/lib/response")
const jwt = require("jsonwebtoken")

exports.isAdmin=(req,res,next)=>{
const token = req.header("token")
if(!token){
    return res.status(401).json("access denied")
}else{
    const verified = jwt.verify(token,process.env.TOKEN_KEY)
    if(verified.Account==="1"){
        next()
    }else {
        return res.status(403).json("you are not allowed for this route only Admin can access")
    }
}
}

exports.isAdminHr = (req, res, next) => {
    const token = req.header("token")
    if (!token) {
        return res.status(401).json("Access Denied")
    } else {
        const verified = jwt.verify(token, process.env.TOKEN_KEY)
        console.log("next ",verified);
        if (verified.Account === "1" || verified.Account === "2") {
            next()
        } else {
            return res.status(403).json("you are not allowed for this route only Admin or HR add this field")
        }
    }
}
exports.isHr = (req,res,next)=>{
    const token = req.header("token")
    if(!token){
        return res.status(401).json("access Denied")
    }else{
        const verified = jwt.verify(token,process.env.TOKEN_KEY)
        if(verified.Account==="2"){
            next()
        }else{
            res.status(403).json("you are not allowed for this route only HR add this position")
        }
    }
}
exports.isHrEmp = (req,res,next)=>{
    const token = req.header("token")
    if (!token) {
        return res.status(401).json("Access Denied")
    } else {
        const verified = jwt.verify(token, process.env.TOKEN_KEY)
        if (verified.Account === "2" || verified.Account === "3") {
            next()

        } else {
            return res.status(403).json("you are not allowed for this route.")
        }
    }
}
exports.isEmp= (req,res,next)=>{
    const token = req.header("token")
    if (!token) {
        return res.status(401).json("Access Denied")
    } else {
        const verified = jwt.verify(token, process.env.TOKEN_KEY)
        if (verified.Account === "3") {
            next()

        } else {
            return res.status(403).json("you are not allowed for this route")
        }
    }
}

