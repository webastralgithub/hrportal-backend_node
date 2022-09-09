const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const DepartmentSchema = new mongoose.Schema({
    departmentName:{
        type:String,
        required:true,

    },
    DepartmentID:{
        type:Number
    }

})
DepartmentSchema.plugin(AutoIncrement,{
    id:"DepartmentID_seq",
    inc_field:"DepartmentID"
})
module.exports  = mongoose.model("Department",DepartmentSchema);