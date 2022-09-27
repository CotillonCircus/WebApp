const mercadopago = require('mercadopago');
const dotenv = require('dotenv');
const { Product,Order,Catalog,User } = require('../db');

dotenv.config();

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const createPreference = async (req, res, next) => {
  const {sub,products} = req.body;

  const newOrder = await createOrder(products,sub,0)

  console.log(newOrder.id)

  let items = products.map(async (item) => {
    const product = await Product.findByPk(item.id);
    return {
      title: product.name,
      unit_price: product.price,
      quantity: item.quantity,
    };
  });
  items = await Promise.all(items);

  let preference = {
    items: items,

    back_urls: {
      success: 'http://localhost:3000/success?orderId='+newOrder.id,
      failure: 'http://localhost:3000/failure',
      pending: 'http://localhost:3000/pending',
    },
    auto_return: 'approved',
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response.body.init_point);
      res.json({
        id: response.body.id,
        init_point: response.body.init_point,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getFeedback = async (req, res, next) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
};

const createOrder = async(products,sub,totalPrize)=>{
  const adaptedProducts = await adaptProducts(products);

  const newOrder = await Order.create({totalPrize,products: adaptedProducts});
  const user = await User.findByPk(sub)
  newOrder.setUser(user)
  return(newOrder);
}

const adaptProducts= async(products)=>{
  let array = [];
  console.log(products)
  const mapeo = products.map(async ({id,quantity}) => {
      const product = await Product.findOne({where: {id}, include: Catalog});
      
      if(!product){
          console.log("Entre a !product")
          throw new Error("Producto no encontrado");
      }
      if(product.stock-quantity>0){
          
          let stock = product.stock - quantity
          Product.update({stock},{where:{id}})
          
          // const catalog = await Catalog.findOne({where: {id: product.catalogId}})
          
          let falseProduct = {
              name: product.name,
              price: product.price,
              img: product.img,
              cant: product.cant,
              size: product.size,
              color: product.color,
              cantBuyed:quantity,
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


module.exports = { createPreference, getFeedback };
