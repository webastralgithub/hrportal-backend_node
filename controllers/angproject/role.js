const Role = require("../../models/angularproject/Role")
const RoleAccessbleSchema=require('../../models/angularproject/RoutesAccesseble')
exports.add = async(req,res)=>{
    console.log('here')
    try {
        const entry = {
            roleType:req.body.roleType
        }
        const adddata = new Role(entry)
        const savedata = await adddata.save()
        return res.json({msg:"Data added ",status:true,data:savedata})


    } catch (error) {
        return  res.status(500).json(error)
    }
}

exports.getRole = async(req,res)=>{

    try {
        const getData = await Role.find()
  
        const getRoutes=await RoleAccessbleSchema.find()
  
        // var ids= getRoutes.map(function(rout) {
        //     return rout._id;
        //   });
        var newArray=[]
        
          for(let i=0;i<getData.length;i++){
            var arr=[]
            for(let j=0;j<getRoutes.length;j++){
                console.log("data",getData[i]._id)
               console.log('routes', getRoutes[j].roleId)
              if(getData[i]._id.equals(getRoutes[j].roleId)){
                console.log('here')
                if(getRoutes[j].checked==true){
                    console.log('here')
                   arr.push(getRoutes[j].routeName)
                }
              }

          }
          newArray.push({...getData[i],arr})
        }
         console.log(newArray)
        res.json({status:true,data:newArray})
       
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteRole = async (req, res) => {
    const id = req.params.id
    try {
        const check = await Role.findById(id)
        if (check) {
            await Role.findByIdAndRemove(id)
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

// const deleteAllRoles = async (req, res) => {
//     try{
//         Role.deleteMany()
//     }
// }