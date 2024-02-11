const express = require("express")
const router  = require("./routes/user")
const connectiondb = require ('./connection')
const app = express();
const cookieParser = require('cookie-parser')

connectiondb("mongodb://127.0.0.1:27017/couserdb").then(()=>console.log("database connected..."));

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use("/user",router);



app.listen(8000,()=>console.log("sever started..."))


