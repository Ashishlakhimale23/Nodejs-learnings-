
const uniqueid=require("short-unique-id");
const Url =require("../models/url");

async function handelgeneratenewid(req,res){
    const body = req.body;
    let response=[];
    const ShortID = new uniqueid({length:8}).rnd();
    await  Url.create({
        shortid:ShortID,
        redirecturl:body.url,
        timestamp:[],
    })
    const url = Url.find({});
    if(!url){
        return res.end();
    }
    else{
        
    (await url).forEach(element => {    
        response.push({
            shortid: element.shortid,
            redirecturl: element.redirecturl
        });
    });
        
        res.send(response);
    }
    

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
