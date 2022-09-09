const {Catalog} = require("../db") 


const getAllCatalogs = async (req,res,next) => {

    try {
        const catalogs = await Catalog.findAll()
        res.send(catalogs)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

module.exports={
    getAllCatalogs
}