const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const PositionSchema = new mongoose.Schema({
    positionName:{
        type:String,
        required:true,

    },
    PositionID:{
        type:Number
    }
})

PositionSchema.plugin(AutoIncrement,{
    id:"PositionID_seq",
    inc_field:"PositionID"
})

module.exports  = mongoose.model("Position",PositionSchema);