const jwt = require("jsonwebtoken")
async function Userlogin(req,res,next){

    if(!(req.cookies.token && jwt.verify(req.cookies?.token,"shhhh"))){
       
        res.json({"status":"cookies not found "}).end();
    }
    else{
        next();
    }
    


}
module.exports = {Userlogin};
