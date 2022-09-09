const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);


const LeaveApplicationSchema = new mongoose.Schema({
    Leavetype: { type: String, required: true },
    FromDate: { type: Date, required: true },
    ToDate: { type: Date, required: true },
    Reasonforleave: { type: String, required: true },
    Status: { type: String, required: true },
    employee: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }]
  });

LeaveApplicationSchema.plugin(AutoIncrement,{
  id:"LeaveApplicationID_seq",
  inc_field:"LeaveApplicationID"
})

  module.exports= mongoose.model("LeaveApplication",LeaveApplicationSchema)