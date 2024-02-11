const Usercouser = require("../model/couser")
const User = require("../model/user")
const jwt = require('jsonwebtoken')

async function handlecouserinput(req,res){
    const {title,description,price}=req.body;
    await Usercouser.create({
        title,
        description,
        price
    })
    res.json({"task":"completed"})

}

async function handlecouseroutput(req,res){
    let courses =[];
    const usercouser = Usercouser.find({});
    (await usercouser).forEach(element => {
       
          courses.push({
                title:element.title,
                description:element.description,
                price:element.price
            }
                
            )
       
    });

    res.send(courses);

}

async function handlecoursepurchased(req,res){
    console.log("hello")
    const title = req.params.id;
    console.log(title)
    const Couser =await Usercouser.findOne({title});
    const useremail =await jwt.verify(req.cookies?.token,"23032004");
    const email = useremail.email;
    const user = await User.findOne({email});
    console.log(user)
    console.log(useremail)
    console.log(Couser._id)

    if(user.purchased.includes(Couser._id)){
        res.end()
    }
    else{
        user.purchased.push(Couser._id);
        await user.save();

        res.json({"task":"complete"})
    }
}

async function handlepurchased(req,res){
    const useremail =await jwt.verify(req.cookies?.token,"23032004");
    const email = useremail.email;
    const user = await User.findOne({email});
   
    let courses = [];

    for(let courseId of user.purchased){
        const course = await Usercouser.findById(courseId);
        courses.push({ ...course._doc});
    }

    res.status(200).json({ courses: courses });
    

}

module.exports ={
 handlecouserinput,
 handlecouseroutput,
 handlecoursepurchased,
 handlepurchased
}


