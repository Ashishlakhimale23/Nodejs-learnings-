
const {user} = require("../model/user")
const bcrpty = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function handlesignin(req,res){
    const {username,email,password} = req.body ;
    const userid = await user.findOne({email:email,password:password})
    console.log(userid)

    const bcrptyedpassword =await bcrpty.hash(password,10).then((respones)=>{
        console.log(respones)
        if(userid){
            return res.json({"status":"user already exists"})
    
        }
        else{
            
            user.create({
                username,
                email,
                password:respones
            })
            res.json({"created":username})
        }
    })
   
    

   
}

async function handlelogin (req,res){
   const {email,password} = req.body;
   console.log(email)
   const userid = await user.findOne({email:email})  
   

   if(userid){
    bcrpty.compare(password,userid.password).then((responses)=>{
        if(responses){
        console.log(responses)
        const token = jwt.sign({
            email,
            password:userid.password
        },"ashish",{expiresIn:'1h'});
        res.json({token})}
        else{
            res.json({"status":"password incorrect "})
        }


    })
   }
   else{
    res.json({"status":"signin please"})
   }

}

module.exports ={
    handlelogin,handlesignin
}