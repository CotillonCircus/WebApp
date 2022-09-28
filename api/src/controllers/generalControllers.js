const {Product,Catalog} = require("../db") 

const {inventario,catalogos} = require("./inventario")
const path = require("path")
const FS = require("fs")

const populate = async () => {

    await Catalog.bulkCreate(catalogos)
    const port = process.env.PORT||3001
    const dbhost = process.env.DB_HOST
    const security= process.env.PORT!==3001?"s":""
    const url="http"+security+"://"+dbhost+":"+port+"/images/"

    let images = FS.readdirSync(path.join(__dirname, '../routes/images'))
    let productos = inventario.map((i)=>{
        let img = `${url}imagen_no_disponible.jpg`
        if(images.includes(`${i.name}_${i.color}.jpg`)){
            img = `${url+i.name}_${i.color}.jpg`
        }
        return{
            ...i,
            img:img
        }
    })
    
    await Product.bulkCreate(productos)
    console.log("db populated")
}

module.exports={
    populate
}

