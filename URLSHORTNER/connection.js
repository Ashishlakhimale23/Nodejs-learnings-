const mongoose=require("mongoose");
async function connectdb(url){
    return await mongoose.connect(url);
}

module.exports=connectdb;
