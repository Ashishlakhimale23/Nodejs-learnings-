
const uniqueid=require("short-unique-id");
const Url =require("../models/user");

async function handelgeneratenewid(req,res){
    const body = req.body;
    const ShortID = new uniqueid({length:8}).rnd();
    await  Url.create({
        shortid:ShortID,
        redirecturl:body.url,
        timestamp:[],


    })
    return res.status(201).json({"status":"complete"});

}

async function handeldeletebyid(req,res){
    const id = req.params.id;
    await Url.findByIdAndDelete(id);
    return res.json({"deleted":"done"});
};

async function handelgetwithid(req,res){
    const id = req.params.shortid;
    console.log(id);
    const user = await Url.findByIdAndUpdate(id,{
        $push:{
            visithistory:{timestamp:Date.now()},
        }
       
    });
   res.redirect(user.redirecturl);
}

async function handelgetidwithanalytics(req,res){{
    const id = req.params.shortid;
    const user = await Url.findById(id);
    res.json({"clicks":user.visithistory.length});

}}


module.exports={
    handelgeneratenewid,
    handeldeletebyid,
    handelgetwithid,
 handelgetidwithanalytics

}
