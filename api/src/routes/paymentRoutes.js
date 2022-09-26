const { Router } = require('express');
const {
  createPreference,
  getFeedback,
} = require('../controllers/paymentsControllers');

const router = Router();

router.post('/create_preference', createPreference);
router.get('/feedback', getFeedback);

module.exports = router;
