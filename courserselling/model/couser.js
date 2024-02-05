const mongoose = require ("mongoose")

const couser = new mongoose.Schema({
    title :{
        type:String,
        required : true,
        unique:true

    },
    description:{
        type:String,
        required : true,
        
    },
    price :{
        type:String,
        required : true,
        
    }
})

const Usercouser = mongoose.model("Usercouser",couser);
module.exports = Usercouser;