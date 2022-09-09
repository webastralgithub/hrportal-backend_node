
const UserRole = require("../models/UserRole")

exports.addRole = async (req, res) => {
    try {
        const check = await UserRole.findOne({ roleType: req.body.roleType })
        if (check) {
            return res.status(409).json({ msg: "Role already exist" })
        } else {

            const addRole = new UserRole(req.body)
            const saveRole = await addRole.save()
            return res.status(200).json({
                data: saveRole
            })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.getRole = async (req, res) => {
    try {
        const getRole = await UserRole.find()
        return res.status(200).json({
            data: getRole,
            status: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            status: false
        })

    }
}
exports.updateRole = async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
        const check = await UserRole.findById(id)
        if (check != null) {
            if (check.roleType == req.body.roleType) {
                return res.status(409).json({
                    status: false,
                    msg: "Role already exist"
                })
            } else {
                const updateRole = await UserRole.findByIdAndUpdate(id, req.body, {
                    new: true
                })
                return res.status(200).json({
                    data: updateRole,
                    status: true,
                    msg: "Data updated"
                })
            }
        }

    } catch (error) {
        return res.status(500).json({
            msg: error,
            status: false
        })

    }
}
exports.deleteRole = async (req, res) => {
    const id = req.params.id
    try {
        const check = await UserRole.findById(id)
        if (check) {
            await UserRole.findByIdAndRemove(id)
            return res.status(200).json({ status: true, msg: "Data deleted" })

        } else {
            return res.status(200).json({ status: false, msg: `Data not found for this id ${id}` })

        }
    } catch (error) {
        return res.status(500).json({
            msg: error,
            status: false
        })
    }
}