const { customer, getCustomerId, createCustomer, editCustomer } = require('../controllers/cliente');

const router = require('express').Router();


router.get('/', customer);
router.get('/:id', getCustomerId);
router.post('/create', createCustomer)
router.put('/edit/:id', editCustomer)

module.exports = router;