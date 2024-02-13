const express = require("express")
const router = express.Router()
const {handlerpost} = require("../controller/route")
const {handleauth} = require("../middlerware/userauth")

router.post("/",handleauth,handlerpost)

module.exports ={
    router
}