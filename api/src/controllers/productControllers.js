const { Op } = require("sequelize")
const {Product} = require("../db") 

const getAllProducts = async (req,res,next) => {

    const {name,catalogId} = req.query

    const condition = {}

    condition.name={[Op.iLike]:`%${name||""}`}
    
    if(catalogId)condition.catalogId=catalogId

    try {
        const products = await Product.findAll({where:condition})
        console.log(products.length)
        res.send(products)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

module.exports={
    getAllProducts,
}
