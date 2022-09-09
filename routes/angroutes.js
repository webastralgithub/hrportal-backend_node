const router = require("express").Router()
const { add, getRole, deleteRole } = require("../controllers/angproject/role")

const { update } = require("../controllers/angproject/routesaccess")




router.post('/add' ,add)
router.get('/get' ,getRole)
router.delete('/deleteRole/:id',deleteRole);
// 

router.patch("/RoleAccessbleSchema/:id",update)


module.exports = router

//6311f74a2732ba615b8361ee
//6311f7502732ba615b8361f0