const express = require("express")
const routeruser = express.Router()
const {handlelogin,handlesignin}= require("../controller/user")


routeruser.post("/signin",handlesignin)
routeruser.get("/login",handlelogin)
module.exports ={
    routeruser
}