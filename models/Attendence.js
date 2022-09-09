
const mongoose = require('mongoose')

const attendenceSchema = new mongoose.Schema({
    login: {
        type: Boolean,

    },
    logout: {
        type: Boolean
    },
    Employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"

    },
    type: {
        type: String,
        default:"absent"
    }

}, { timestamps: true }

)





module.exports = mongoose.model("Attendence", attendenceSchema)