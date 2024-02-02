const express = require ("express")
const userroute = require("./routes/user")
const urlroute = require("./routes/url")
const connectdb = require("./connection")
const cookie = require('cookie-parser')


const app = express();
connectdb("mongodb://127.0.0.1:27017/urlDB")
.then(()=>console.log("mongodb connected..."))
.catch((err)=>console.log("error",err));

app.use(express.urlencoded({extended:false}));
app.use(cookie())

app.use("/user",userroute);
app.use("/url",urlroute);

app.listen(8000,()=>console.log("server started..."));

