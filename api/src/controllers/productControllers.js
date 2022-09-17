const { Op } = require("sequelize")
const {Product} = require("../db") 

const getAllProducts = async (req,res,next) => {

    const {name,catalogId,color,size,cant,alf,price} = req.query

    const condition = {}
    const sort=[]
    alf&&sort.push(["name",alf])
    price&&sort.push(["price",price])

    condition.name={[Op.iLike]:`%${name||""}`}
    condition.color={[Op.iLike]:`%${color||""}`}
    condition.size={[Op.iLike]:`%${size||""}`}
    if(cant)condition.cant=parseInt(cant)
    
    if(catalogId)condition.catalogId=catalogId



    try {
        const products = await Product.findAll({where:condition,order:sort})
        res.send(products)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

const getProductDetails = async (req,res,next) => {
    const ID = req.params.ID
    try {
        const product = await Product.findByPk(ID)
        res.send(product)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

const getAllToFilter = async (req,res,next) =>{
    const products = await Product.findAll()
    const filters = {
        colors:[],
        cants:[],
        sizes:[],
    }

    products.forEach(c=>{
        !filters.colors.includes(c.color)&&!filters.colors.push(c.color)
        !filters.cants.includes(c.cant)&&!filters.cants.push(c.cant)
        !filters.sizes.includes(c.size)&&!filters.sizes.push(c.size)
    })
    res.send(filters)
}
module.exports={
    getAllProducts,
    getProductDetails,
    getAllToFilter
}
