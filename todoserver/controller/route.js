const {todo} = require("../model/todo")



async function handlerpost(req, res) {
    const { title, description} = req.body;
    await todo.create({
        title,
        description
    })
    res.json({"title":title,
"description":description})
}

module.exports= {
    handlerpost
}
