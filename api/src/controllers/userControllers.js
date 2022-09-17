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

const editUserStatus = async (req,res,next) => {

    const {sub,status} = req.body

    try {
        await User.update({status},{where:{sub}})
        const user = await User.findByPk(sub)
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

const getAllUsers = async (req,res,next) => {

    try {
        const users = await User.findAll({where: {status: 'mayorista'}})

        res.send(users)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

module.exports={
    ingress,
    editUserStatus,
    getAllUsers
}