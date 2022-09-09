const Employee = require('../models/Employee')
const Salary = require('../models/Salary')

exports.addSalary = async (req, res) => {
    const id = req.params.id
    try {
        const employee = await Employee.findOne({
            _id: id
        })
        console.log(employee);
        if (employee.salary.length == 0) {
            let newSalary = {
                BasicSalary: req.body.BasicSalary,
                BankName: req.body.BankName,
                AccountNo: req.body.AccountNo,
                AccountHolderName: req.body.AccountHolderName,
                IFSCcode: req.body.IFSCcode,
                TaxDeduction: req.body.TaxDeduction,
                Employee:id
            }
            await Salary.create(newSalary, (err, salary) => {
                if (err) {
                    res.json("err")
                } else {
                    employee.salary.push(salary)
                    employee.save((err, data) => {
                        if (err) {
                            console.log(err);
                            res.json(err)
                        } else {
                            res.json(data)
                        }
                    })
                    console.log("salary saved");
                }
            })
          
        } else {
            res.status(403).json("Salary Information about this employee already exits")
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.getSalary= async(req,res)=>{
    try {
        const listOfSalary = await Employee.find().populate({path:"salary"}).select("FirstName MiddleName LastName")
        return res.status(200).json({data:listOfSalary})
    } catch (error) {
        return res.status(500).json({data:error})
    }
}
exports.deleteSalary = async(req,res)=>{
    const id = req.params.id
    try {
         await Employee.findById({_id:id},(err,employee)=>{
             if(err){
                 console.log(err);
             }else{
                //  console.log("uuuuuuuunnnnnnnnnnnnnnndef",employee.salary[0]);
                Salary.findByIdAndRemove({_id:employee.salary[0]},(err,salary)=>{
                    if(!err){
                        Employee.update(
                            {_id:id},
                            {$pull:{salary:employee.salary[0]}},
                            (err,data)=>{
                                console.log(data);
                                res.json(data)
                            }
                        )
                    }
                })
             }
         })

    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.updateSalary= async(req,res)=>{
    const id = req.params.id

try {
    let newSalary = {
        BasicSalary: req.body.BasicSalary,
        BankName: req.body.BankName,
        AccountHolderName: req.body.AccountHolderName,
        IFSCcode: req.body.IFSCcode,
        TaxDeduction: req.body.TaxDeduction,
       
    }
    // console.log(newSalary);
   const emp = await Salary.findByIdAndUpdate({_id:id},newSalary,{new:true})
   res.json({data:emp})
    
} catch (error) {
    return res.status(500).json(error)
}
}