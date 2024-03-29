const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    
    Name: {
        type: String,
        required: true,

    },
    Password: {
        type: String,
        required: true,

    },
    Email: {
        type: String,
        required: true,

    },
    Role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }
    
})





module.exports = mongoose.model("User", UserSchema);