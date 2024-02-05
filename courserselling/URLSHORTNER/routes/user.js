const express = require("express");
const userrouter = express.Router();
const {handlersignup,
    handlerlogin}=require("../controllers/user")

userrouter.post("/signup",handlersignup);
userrouter.get("/login",handlerlogin);

module.exports = userrouter;