const Education = require("../models/Education")
const Employee = require("../models/Employee")

exports.addEduction = async (req, res) => {
    const id = req.params.id
    try {
        const employee = await Employee.findById(id)

        // if (employee.education.length == 0) {
        let newEduEntry = {
            SchoolUniversity: req.body.SchoolUniversity,
            Degree: req.body.Degree,
            Grade: req.body.Grade,
            PassingOfYear: req.body.PassingOfYear,
            Employee: id
        }
        const education = await Education.findOne({
            Degree: req.body.Degree,
            Employee: id
        })
        console.log(education);
        if (education == null) {
            await Education.create(newEduEntry, (err, education) => {
                if (err) {
                    console.log("err");
                } else {
                    employee.education.push(education)
                    employee.save((err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.status(200).json({
                                status: true,
                                data: data,
                                msg: "Education added"
                            })
                        }
                    })
                }
            })
        } else {
            return res.status(403).json({
                status: false,
                msg: "This degree or class already exist"
            })
        }


    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.deleteEduction = async (req, res) => {
    const id = req.params.id
    try {
        const deleteData = await Education.findByIdAndRemove(id)
        return res.status(200).json({ status: true, msg: "Deleted" })

    } catch (error) {
        return res.status(500).json(error)

    }
}

exports.getAllEducations = async (req, res) => {
    try {
        const data = await Education.find()
        return res.status(200).json({ status: 200, data: data })

    } catch (error) {
        return res.status(500).json(error)

    }
}

exports.getEmployeeEducationByEmployee = async (req, res) => {
    const employeeId = req.params.id
    try {
        const findEductions = await Education.find({ Employee: employeeId })
        return res.status(200).json({ status: true, data: findEductions })

    } catch (error) {
        return res.status(500).json(error)

    }
}