const {Product} = require("../db") 

const getAllProducts = async (req,res,next) => {

    const condition = {}

    for (const prop in req.query) {
        condition[prop]=req.query[prop]
    }

    try {
        const products = await Product.findAll()
        res.send(products)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

const getProductsByCatalog = async (req,res,next) => {
    const {catalog} = req.query

    try {
        const products = await Product.findAll()
        res.send(products)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}


module.exports={
    getAllProducts,
    getProductsByCatalog
}
