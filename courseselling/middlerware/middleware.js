const jwt = require('jsonwebtoken')

async function userverification(req,res,next){
    if(!(req.cookies?.token && jwt.verify(req.cookies?.token,"23032004"))){
        res.json({"userlogin":"incomplete"})
    }
    else{
    next();}

}

function userrestriction(roles=[]){
    return function (req,res,next){
        const cook = jwt.verify(req.cookies?.token,"23032004");
        if(!(roles.includes(cook.role))){
            res.json({"task":"incomplete"})
        }
        else{
            console.log("hello")
            next();
        }

    }

}





module.exports = {userverification,userrestriction}
