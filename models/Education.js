const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const EducationSchema = new mongoose.Schema({
    SchoolUniversity: {
        type: String,
        required: true
    },
    Degree: {
        type: String,
        required: true
    },
    Grade: {
        type: String,
        required: true
    },
    PassingOfYear: {
        type: String,
        required: true
    },
    EducationID: {
        type: Number
    },
    Employee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    }
})
EducationSchema.plugin(AutoIncrement, {
    id: "EducationID_seq",
    inc_field: "EducationID"
})
module.exports = mongoose.model("Education", EducationSchema);