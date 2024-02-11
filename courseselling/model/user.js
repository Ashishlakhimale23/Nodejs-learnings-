const mongoose = require ("mongoose")

const user = new mongoose.Schema({
    username :{
        type:String,
        required : true,

    },
    email :{
        type:String,
        required : true,
        unique:true,
    },
    password :{
        type:String,
        required : true,
        
    },
    role:{
        type:String,
        required : true,  
    },
    purchased: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Usercouser",
        },
      ],
})

const User = mongoose.model("User",user);
module.exports = User;