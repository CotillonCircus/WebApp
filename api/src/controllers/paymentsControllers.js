const mercadopago = require('mercadopago');
const dotenv = require('dotenv');
const { Product } = require('../db');

dotenv.config();

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const createPreference = async (req, res, next) => {
  let items = req.body.map(async (item) => {
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
      success: 'http://localhost:3000/success',
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

module.exports = { createPreference, getFeedback };
