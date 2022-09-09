const {User} = require("../db") 

const ingress = async (req,res,next) => {

    const {sub} = req.body

    try {
        const user = await User.findOrCreate({where:{sub},defaults:req.body})

        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}


module.exports={
    ingress
}