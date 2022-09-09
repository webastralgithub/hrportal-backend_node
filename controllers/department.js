const Department = require("../models/Department")



exports.addDepart = async (req, res) => {
    try {
        const check = await Department.findOne({
            departmentName: req.body.departmentName
        })
        if (check == null) {
            const addDeprt = new Department(req.body);
            const saveDepart = await addDeprt.save()
            return res.status(200).json({
                status: true,
                data: saveDepart
            })
        } else {
            return res.status(409).json({
                status: false,
                msg: "This Department already exist"
            })
        }


    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.getDepartmentList = async (req, res) => {
    try {
        const allDepart = await Department.find()
        return res.status(200).json({
            status: true,
            data: allDepart
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.updateDepartment = async (req, res) => {
    const id = req.params.id;
    try {
        const check = await Department.findById(id)
        console.log(check);
        
            if (check.departmentName==req.body.departmentName) {
                return res.status(409).json({
                    status: false,
                    msg: "department already exist"
                })
            } else {

                const update = await Department.findByIdAndUpdate(id, req.body, {
                    new: true
                })
                return res.status(200).json({
                    status: true,
                    data: update,
                    msg: "Data updated"
                })
            }
       


    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.deleteDepartment = async (req, res) => {
    const id = req.params.id
    try {
        const findAndDeleteDepart = await Department.findByIdAndDelete(id)
        return res.status(200).json({
            status: true,
            data: findAndDeleteDepart,  
            msg: "Data deleted"
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}