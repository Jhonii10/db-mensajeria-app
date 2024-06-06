const { customer, getCustomerId, createCustomer } = require('../controllers/cliente');

const router = require('express').Router();


router.get('/', customer);
router.get('/:id', getCustomerId);
router.post('/create', createCustomer)


module.exports = router;