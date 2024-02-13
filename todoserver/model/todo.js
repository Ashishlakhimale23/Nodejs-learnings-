const mongoose = require("mongoose")
const todoschema = new mongoose.Schema({
    title :{
        type :String,
        required : true 
    },
    description:{
        type:String,
        required:true

    }
})

const todo = mongoose.model("todo",todoschema)

module.exports ={
    todo 
}