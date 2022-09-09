const mongoose = require('mongoose')
const Increment = require('mongoose-sequence')(mongoose);

const employeeSchema = new mongoose.Schema({
    FirstName: {
        type: String,
       
    },
    MiddleName: {
        type: String,
       
    },
    LastName: {
        type: String,
     
    },
    Email: {
        type: String,
       
        unique: true
    },
    Password: {
        type: String,
       
    },
    Gender: {
        type: String,
       
    },
    Employee_ID: {
        type: Number
    },
    DOB: {
        type: Date,
      
    },
    DateOfJoining: {
        type: Date,
        
    },
    TerminateDate: {
        type: Date
    },
    Deleted: {
        type: Boolean,
        default:false
    },
    Photo: {
        type: String,
        default:null
    },
    ContactNo: {
        type: String,
   
    },
    EmployeeCode: {
        type: String,
       
    },
    Account: {
        type: String,
      
    },
     TeamLeader: {
        type: String,
      
    },
    FatherName: {
        type: String,
      
    },
    MotherName: {
        type: String,
      
    },

    roleType: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }],
    position: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Position"
    }],
    department: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    }],
    salary: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Salary"
    }],
    education: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Education"
    }],
    familyInfo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FamilyInfo"
    }],
    workExperience: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "WorkExperience"
    }],
    leaveApplication: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "LeaveApplication"
    }],
    BloodGroup: {
        type: String
    },
    EmergencyContactNo: {
        type: String
    },
    Hobbies: [{
        type: String
    }],
   
    AadhaarCardNo: {
        type: String
    },
    PermanetAddress: {
        type: String
    },
    PresentAddress: {
        type: String
    }


})

employeeSchema.plugin(Increment, {
    id: "Employee_ID_seq",
    inc_field: "Employee_ID",
    
})


module.exports = mongoose.model("Employee", employeeSchema);