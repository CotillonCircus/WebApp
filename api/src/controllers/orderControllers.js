const {Product,User,Order, Catalog} = require("../db");
const {literal,Op} = require("sequelize");

const postOrder = async (req,res)=>{

    const {sub,products,totalPrize} = req.body;
    //HAY QUE CAMBIAR LOS PRODUCTOS A UNA COPIA EN UN ARRAY
    try{
        
        const array = await adaptProducts(products);

        console.log(array)

        const newOrder = await Order.create({totalPrize,products: array});

        const user = await User.findByPk(sub);

        if(!user){
            console.log("Entre a !user")
            throw new Error("Usuario no encontrado o no autorizado");
        }

        await newOrder.setUser(user);

        const newNewOrder = await Order.findOne({where: {userSub: sub}, include: User});

        res.send(newNewOrder);

    }catch(error){
       res.status(404).send(error.message)
    }
}

const adaptProducts= async(products)=>{
    let array = [];
    const mapeo = products.map(async ({id,cantBuyed}) => {
        const product = await Product.findOne({where: {id}, include: Catalog});
        
        if(!product){
            console.log("Entre a !product")
            throw new Error("Producto no encontrado");
        }
        if(product.stock-cantBuyed>0){
            
            let stock = product.stock - cantBuyed
            Product.update({stock},{where:{id}})
            
            // const catalog = await Catalog.findOne({where: {id: product.catalogId}})
            
            let falseProduct = {
                name: product.name,
                price: product.price,
                img: product.img,
                cant: product.cant,
                size: product.size,
                color: product.color,
                cantBuyed,
                catalog: product.catalog.name
            }

            // await newOrder.addProduct(product);
            return falseProduct;

        }else{
            console.log("Entre a no hay stock")
            throw new Error("No hay stock del producto de ID: " + id);
        }

    });
    array = await Promise.all(mapeo);
    return array;
}

const getOrderByUser = async(req,res,next)=>{

    const {sub} = req.params;

    try{

        const order = await Order.findAll({where: {userSub: sub}, include: User});

        if(!order){
            throw new Error("Este usuario no tiene ordenes");
        }else{
            res.status(200).send(order);
        }

    }catch(error){
        res.status(404).send(error.message)
    }
}

const filteredOrders = async(req,res,next)=>{
    const {userName,firstDate,secondDate,productName} = req.query;


    try{

                let condition = {};
                let userCondition = {}
                // const startedDate = new Date(firstDate+" 00:00:00");
                // const endDate = new Date(secondDate+" 00:00:00");

                if(userName)userCondition.name={[Op.iLike]: `%${userName}%`};
                // if(firstDate && secondDate)condition.createdAt= {[Op.between] : [startedDate , endDate ]};
                    


                let orders = await Order.findAll({where: condition, include: {model: User, where: userCondition}});

                if(productName){
                    orders= orders.filter((order)=>
                        order.products.find((prod)=>{
                            return prod.name.includes(productName);
                        })
                    );
                    console.log(orders)
                }


                res.status(200).send(orders);                

    }catch(error){
        res.status(404).send(error.message)
    }
}

const getOneOrder = async(req,res,next)=>{
    const id = req.params.id

    try{
        await Order.update({status:"approved"},{where:{id}});
        const order = await Order.findByPk(id)
        

        order?
        res.status(200).send(order)
        :res.status(400).send()

    }catch(error){
        res.status(404).send(error.message)
    }
}

module.exports = {
    postOrder,
    getOrderByUser,
    filteredOrders,
    getOrderByUser,
    getOneOrder
}