const User =require("../models/user")
const jwt = require("jsonwebtoken")

async function handlersignup(req,res){
    const {username,email,password}= req.body;
    const user= await User.create({
        username,
        email,
        password
    })
    res.redirect("/url")
}

async function handlerlogin(req,res){
    const {email,password}=req.body;
    const userid= await User.findOne({email});

    if(!userid){
        res.json({"status":"not found"})
    }
    
    else{
        console.log("hellotoken");
        const token = jwt.sign({
            id : userid._id,
            email : email ,
            password : password
        },"shhhh")
        const option  = {
            httpOnly : true,
        }
        console.log("hello");

        return res.cookie("token",token,option).json({"status":"found"})
    };

}

module.exports = {
    handlersignup,
    handlerlogin
}