const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const RoleSchema = new mongoose.Schema({
    roleType: {
        type: String,
        required: true,

    },
    RoleID: {
        type: Number
    },
    
})

RoleSchema.plugin(AutoIncrement, {
    id: "RoleID_seq",
    inc_field: 'RoleID'

})



module.exports = mongoose.model("Role", RoleSchema);