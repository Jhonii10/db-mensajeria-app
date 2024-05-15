const { customer, getCustomerId, createCustomer, editCustomer, deleteCustomer } = require('../controllers/cliente');

const router = require('express').Router();


router.get('/', customer);
router.get('/:id', getCustomerId);
router.post('/create', createCustomer)
router.put('/edit/:id', editCustomer)
router.delete('/delete/:id', deleteCustomer)


module.exports = router;