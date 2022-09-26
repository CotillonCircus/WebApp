const { Router } = require('express');
const router = Router();

const mercadopago = require('mercadopago');
const dotenv = require('dotenv');

dotenv.config();

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

router.post('/create_preference', (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: Number(req.body.unit_price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: 'http://localhost:3000/feedback',
      failure: 'http://localhost:3000/feedback',
      pending: 'http://localhost:3000/feedback',
    },
    auto_return: 'approved',
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
        init_point: response.body.init_point,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get('/feedback', function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

module.exports = router;
