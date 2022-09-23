const { Op,literal } = require("sequelize")
const {Product} = require("../db") 

const createProduct = async(req,res,next) => {
    try{
        const newProduct = await Product.create(req.body)
        res.send(newProduct)
    }catch(error){
        console.log(error.message)
    }
}

const getAllProducts = async (req,res,next) => {

    const {name,catalogId,color,size,cant,alf,price} = req.query

    const condition = {}
    const sort=[]
    alf&&sort.push(["name",alf])
    price&&sort.push(["price",price])

    condition.name={[Op.iLike]:`%${name||""}%`}

    if(color)condition.color=color.split(",")
    if(size)condition.size=size.split(",")
    if(cant)condition.cant=cant.split(",")
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

const buyProducts=(req,res,next)=>{
    const {productsBuyed} = req.body
    try {
        productsBuyed.forEach(async ({id,cantBuyed})=>{
            const product = await Product.findByPk(id)
            if(product.stock-cantBuyed<0){
                let stock = literal('stock - '+cantBuyed) 
                await Product.update({stock},{where:{id}})
            }else{
                res.status(404).send("no stock "+id)
            }
        })
        res.send()
    } catch (error) {
        console.log(error)   
    }
}

const editProduct = async (req,res,next) => {
    const {id,name,catalogId,color,size,cant,alf,price,cantStock} = req.body
    try {
        const updatedProduct = {name,catalogId,color,size,cant,alf,price,cantStock}
        await Product.update(updatedProduct,{where:{id}})
        res.send()
    } catch (error) {
        res.send(error.message)
    }
}

module.exports={
    getAllProducts,
    getProductDetails,
    getAllToFilter,
    editProduct,
    buyProducts,
    createProduct
}
