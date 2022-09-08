const {Product,Catalog} = require("../db") 

const {inventario,catalogos} = require("./inventario")
// const path = require("path")
// const FS = require("fs")

const populate = async ()=> {
    const url="http://localhost:3001/images/"
    // let images = FS.readdirSync(path.join(__dirname, '/images'))

    await Catalog.bulkCreate(catalogos)
    let productos = inventario.map((i)=>{
        return{
            ...i,
            img:`${url+i.name}_${i.color}.jpg`
        }
    })
    
    await Product.bulkCreate(productos)
    console.log("db populated")
}

module.exports={
    populate
}

