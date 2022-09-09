const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const RoleAccessbleSchema = new mongoose.Schema({
   roleId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoleType"
   },
   routeName:{
       type:String
   },
   checked:{
       type:Boolean,
       
   }

    
})





module.exports = mongoose.model("RoleAccessble", RoleAccessbleSchema);