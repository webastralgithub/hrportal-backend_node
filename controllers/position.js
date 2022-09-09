const Position = require("../models/Position")


exports.addPosition = async (req, res) => {
    try {
        const postion = await Position.findOne({
            positionName: req.body.positionName
        })
        if (postion == null) {

            const addPostion = new Position(req.body)
            const savePosition = await addPostion.save()
            return res.status(200).json({
                status: true,
                data: savePosition
            })
        } else {


            return res.status(409).json({
                msg: "This Positon already exist in table"
            })
        }

    } catch (error) {
        res.status(500).json(error)
    }
}
exports.updatePosition = async (req, res) => {
    const id = req.params.id
    try {
        const check = await Position.findById(id)
        if (check != null) {
            if (check.positionName == req.body.positionName) {
                return res.status(409).json({
                    status: false, 
                    msg: "Position already exist"
                })
            } else {
                const update = await Position.findByIdAndUpdate(id, req.body, {
                    new: true
                })
                return res.status(201).json({
                    msg: "updated",
                    data: update
                })
            }
        }

    } catch (error) {
        res.status(500).json(error)
    }
}
exports.getPositionList = async (req, res) => {
    try {
        const list = await Position.find()
        return res.status(200).json({
            status: true,
            data: list
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.deletePosition = async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
      const data =  await Position.findByIdAndRemove(id)
      console.log(data);
        return res.status(200).json({
            status: true,
            msg: "Data deleted"
        })

    } catch (error) {
        return res.status(500).json(error)

    }
}