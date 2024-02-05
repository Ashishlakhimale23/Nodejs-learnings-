const express = require("express")
const router = express.Router()
const {handlesignin,handlelogin}=require("../controller/user")
const {handlecouserinput, handlecouseroutput,handlecoursepurchased,handlepurchased}=require("../controller/course")
const {userverification,userrestriction}=require("../middlerware/middleware")

router.post("/signin",handlesignin);
router.get("/login",handlelogin);

router.post("/course",userverification,userrestriction(["admin"]),handlecouserinput);
router.get("/course",userverification,handlecouseroutput);
router.post("/course/:id",userrestriction(["normal"]),handlecoursepurchased)
router.get("/course/purchased",userrestriction(["normal"]),handlepurchased)


module.exports = router;