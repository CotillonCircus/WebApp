const productos = require("./inventario")



function prod(){
    let cant = 0

    for(const prop in productos){
        cant += productos[prop].length
        // console.log(productos[prop].length)
    }
    console.log(cant)
    // console.log(productos.CORTINAS_METALIZADAS[1])
}

prod()