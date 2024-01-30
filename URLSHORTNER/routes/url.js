const express = require("express");
const router = express.Router();
const {handelgeneratenewid,
    handeldeletebyid,
    handelgetwithid,
    handelgetidwithanalytics}=require("../controllers/url");

router.post("/",handelgeneratenewid);

router.delete("/:id",handeldeletebyid);

router.get("/:shortid",handelgetwithid);

router.get("/analytics/:shortid",handelgetidwithanalytics)

module.exports=router;

