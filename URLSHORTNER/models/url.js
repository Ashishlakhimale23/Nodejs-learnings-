const mongoose = require("mongoose");

const UserScehma= new mongoose.Schema({
    shortid:{
        type:String,
        required:true,
        unique:true,

    },
    redirecturl:{
        type:String,
        required:true,
        
       

    },
    visithistory:[{timestamp:{type:Number}}],
    
},{timestamp:true});

const Url=mongoose.model("Url",UserScehma);

module.exports=Url;

