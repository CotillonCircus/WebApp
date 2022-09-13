const {Auth} = require("../db");

const postAuth = async (req,res,next)=>{

    const {sub,email,cuit,company,name} = req.body;

    try{
        const auth = await Auth.create({sub,email,cuit,company,name});
        res.status(200).send(auth);
    }catch(error){
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

const getAuth = async (req,res,next)=>{
    try{
        const auths = await Auth.findAll();
        res.status(200).send(auths);
    }catch(error){
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

const deleteAuth = async (req,res,next)=>{
    const {id} = req.body;

    try{
        const deletedAuth = await Auth.destroy({where:{id}});
        res.send("Usuario borrado correctamente");
    }catch(error){
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

module.exports = {
    getAuth,
    postAuth,
    deleteAuth
}