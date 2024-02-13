const {connectiondb} = require("./connection")
const express = require("express")
const  {router} = require ("./route/todo")
const  {routeruser} = require ("./route/user")

const app = express();
app.use(express.urlencoded({extended:false}))
app.use("/user",router)
app.use("/",routeruser)


connectiondb("mongodb://127.0.0.1:27017/todoserver").then(()=>console.log("connected to database"))
app.listen(8000,()=>console.log("connected to server"))
