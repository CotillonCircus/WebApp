const {Auth} = require("../db");
const { sendMail } = require("./generalControllers");

const authorizedText = "nos comunicamos de parte de cotillon circus! usted ah sido autorizado como mayorista. ya puede realizar compras"
const unautorizedText = "nos comunicamos de parte de cotillon circus para informarle que su pedido de ser autorizado como mayorista a sido denegado, puede responder a este correo para detalles del porque de la denegacion"
const subjet = "peticion de autorizacion a mayorista"
const postAuth = async (req,res,next)=>{

    const {sub,email,cuit,company,name,address,razon_social} = req.body;
    try{
        const auth = await Auth.create({sub,email,cuit,company,name,address,razon_social});
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
    const {id,email,authorized} = req.body;
    
    try{
        const text =authorized?authorizedText:unautorizedText
        sendMail(email,subjet,text,"")
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