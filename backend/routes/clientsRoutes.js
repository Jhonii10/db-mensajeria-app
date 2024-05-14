const { customer, getCustomerId } = require('../controllers/cliente');

const router = require('express').Router();


router.get('/', customer);
router.get('/:id', getCustomerId);

module.exports = router;