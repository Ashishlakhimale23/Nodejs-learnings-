const User = require("../model/user")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')



async function handlesignin(req,res){
   const {username,email,password,role}=req.body;
   const saltRounds = 10;
   const Password = await bcrypt.hash(password, saltRounds);
    
   await User.create({
    username,
    email,
    password:Password,
    role
   })
   return res.json({"task":"completed"});
}

async function handlelogin(req,res){
    const {email,password}=req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.json({"task":"incompleted"});

    }
    else{
        console.log("emailfound")
        const result = await bcrypt.compare(password,user.password)
        
        if(result){
            const token = jwt.sign({email:email,
                password:user.password,
            role:user.role},"23032004");
            
            const option  = {
                    httpOnly : true,
                }
                
            return res.cookie("token",token).json({"task":"completed"});
        }
        return res.json({"task":"inpassword"}).end();

        }
 }




module.exports = {
    handlesignin,
    handlelogin
}