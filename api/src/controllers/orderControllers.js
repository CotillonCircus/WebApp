const { Product, User, Order, Catalog } = require('../db');
const { literal, Op } = require('sequelize');
const { sendMail } = require('./generalControllers');
const {NODEMAILER_MAIL_USER } = process.env

const subject = "compra realizada"
const textUser = "su compra a sido realizada exitosamente! con un monto de $"
const textAdmin = "ha realizado una compra de $"

const postOrder = async (req,res)=>{

    const {sub,products,totalPrize} = req.body;
    //HAY QUE CAMBIAR LOS PRODUCTOS A UNA COPIA EN UN ARRAY
    try{
        
        const array = await adaptProducts(products);



        const newOrder = await Order.create({totalPrize,products: array});

        const user = await User.findByPk(sub);

        if(!user){
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
            throw new Error("No hay stock del producto de ID: " + id);
        }

    });
    array = await Promise.all(mapeo);
    return array;
}

const getOrderByUser = async(req,res,next)=>{

    const {sub} = req.params;

    try{

        const order = await Order.findAll({where: {userSub: sub,status:"approved"}, include: User});

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
    const {userName,firstDate,secondDate,productName,id} = req.query;

    
    try{
                let condition ={}
                condition.status="approved";
                let userCondition = {}
                const startedDate = (new Date(firstDate)).getTime();
                const endDate = (new Date(secondDate)).getTime();

                if(!(await Order.findAll()).length){
                    await Order.create({totalPrize:1,products:[{name:"tuky"}],status:"approved",date:(new Date("2022-10-12:00:00.000")).getTime()})
                    await Order.create({totalPrize:1,products:[],status:"approved",date:(new Date("2022-11-12:00:00.000")).getTime()})
                    await Order.create({totalPrize:1,products:[],status:"approved",date:(new Date("2022-12-12:00:00.000")).getTime()})
                }
                
                idIsUuid = id?id.split("-").length:0
                if(id && idIsUuid===5)condition.id=id
                if(userName)userCondition.name={[Op.iLike]: `%${userName}%`};
                if(firstDate && secondDate)condition.date= {[Op.between] : [startedDate , endDate ]};
                    
                let orders = await Order.findAll({where: condition, include: {model: User, required:false, where: userCondition}});

                if(productName){
                    orders= orders.filter((order)=>
                        order.products.find((prod)=>{
                            return prod.name.includes(productName);
                        })
                    );
                }
                
                res.status(200).send(orders);                

    }catch(error){
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

const getOneOrder = async (req, res, next) => {
  const id = req.params.id;
  let text 
  try {
    await Order.update({ status: 'approved' }, { where: { id } });
    const order = await Order.findByPk(id);
    
    const {email,name} = await User.findByPk(order.userSub)
    text = textUser+order.totalPrize
    sendMail(email,subject,text,"")
    text = name+" "+textAdmin+order.totalPrize
    sendMail(NODEMAILER_MAIL_USER,subject,text,"")

    order ? res.status(200).send(order) : res.status(400).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const cancelOrder = async (req,res,next)=>{
    const {name,email,orderId,urlOrigin} = req.body
    try {
        const subject = "CANCELAR PAGO"
        const text = "El usuario "+name+" quiere cancelar una compra. Puede comunicarse con el en su correo: "+email
        const html = "<div> <span>"+text+"</span> <br/> <a href="+urlOrigin+"/admin"+">CLICK AQUI PARA IR A ZONA ADMIN </a> <br/> <span>busque la orden por la id: "+orderId+" </div>" 
        await sendMail(NODEMAILER_MAIL_USER,subject,"",html)
        res.send()
    } catch (error) {
        console.log(error.message)
        res.send(error)
    }
}

const deleteOrder = async (req,res,next)=>{
    const {id} = req.params
    try {
        await Order.update({status:"deleted"},{where:{id}})
        res.send()
    } catch (error) {
        console.log(error.message)
        res.send(error)
    }
}
module.exports = {
  postOrder,
  getOrderByUser,
  filteredOrders,
  getOrderByUser,
  getOneOrder,
  cancelOrder,
  deleteOrder
};
