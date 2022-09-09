const nodemailer = require('nodemailer')
require('dotenv').config()


exports.sendApplication =async( to, subject, message) => {
    let transporter =await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMPT_USER,
            pass: process.env.SMPT_PASS
        }
    })
    // console.log(transporter);
    let mailOptions = {
        from: "developer1607@gmail.com",
        to: to,
        subject: subject,
        html: message,
    }
 
   
  await  transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err.message,"==========>");
          
        }else{
            console.log("success");
        }
    })
// return transporter



}
