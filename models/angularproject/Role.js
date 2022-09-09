const mongoose = require('mongoose')


const RoleSchema = new mongoose.Schema({
    roleType: {
        type: Number || String,
        required: true,
        

    },

    
})


module.exports = mongoose.model("RoleType", RoleSchema);