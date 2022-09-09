const RoutesAccesseble = require("../../models/angularproject/RoutesAccesseble")


exports.update = async(req,res)=>{
    const id = req.params.id
   const checked=req.body.checked
     try {
   if(checked==false){
    
   const result= await RoutesAccesseble.findOneAndRemove({ roleId:id, routeName:req.body.routeName })
   return res.status(200).json({status:true,data:result})
   }
else{
    console.log('herer');
         const newEntry = {
            roleId:id,
            routeName:req.body.routeName,
            checked:req.body.checked
         }
         const adddata = new RoutesAccesseble(newEntry)

         const savedata = await adddata.save()
         return res.status(200).json({status:true,data:savedata})
        }
     } catch (error) {
         return res.status(500).json({error})
     }
}