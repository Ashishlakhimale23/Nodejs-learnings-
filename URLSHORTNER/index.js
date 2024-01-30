const express = require ("express");
const userroute = require("./routes/url");
const connectdb = require("./connection");

const app = express();
connectdb("mongodb://127.0.0.1:27017/urlDB")
.then(()=>console.log("mongodb connected..."))
.catch((err)=>console.log("error",err));

app.use(express.urlencoded({extended:false}));

app.use("/url",userroute);

app.listen(8000,()=>console.log("server started..."));

