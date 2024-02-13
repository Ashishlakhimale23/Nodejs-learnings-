
const jwt = require ("jsonwebtoken")
async function handleauth(req,res,next){
    const auth = req.headers.authorization || req.headers.Authorization 

    if(!auth?.startsWith("Bearer ")) return res.json({"status":"header not found"})
    const Token = auth.split(' ')[1];
    console.log(Token)
    const result  = await jwt.verify(Token,"ashish")
    console.log(result)
    if(result){
        next()
    }
}

module.exports ={
    handleauth

}