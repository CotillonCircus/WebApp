const { Router } = require('express');
const router = Router();

const PaymentController = require('../controllers/paymentsControllers');
const PaymentService = require('../services/paymentsService');
const PaymentInstance = new PaymentController(new PaymentService());

router.get('/', function (req, res, next) {
  return res.json({
    '/single': 'generates a single payment link',
  });
});

router.get('/single', function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;
