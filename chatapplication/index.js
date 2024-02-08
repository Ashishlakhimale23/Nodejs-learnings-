const express = require("express")
const http = require("http")
const path = require ("path")
const socket = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
    
})

io.on("connection",(socket)=>{
    console.log(socket.id)

    socket.on("room name",(roomname)=>{
        console.log(roomname)
        socket.join(roomname)

    })

    socket.on("chat message",(msg,room)=>{
        console.log(msg,room)
    })

    
})


server.listen(8000,()=>console.log("server started ..."))