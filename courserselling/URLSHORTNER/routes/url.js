const express = require("express");
const router = express.Router();
const {handelgeneratenewid,
    handeldeletebyid,
    handelgetwithid,
    handelgetidwithanalytics}=require("../controllers/url");
const {Userlogin} =require("../middleware/userlogin")

router.post("/",Userlogin,handelgeneratenewid);

router.delete("/:id",handeldeletebyid);

router.get("/:shortid",handelgetwithid);

router.get("/analytics/:shortid",handelgetidwithanalytics)

module.exports=router;

