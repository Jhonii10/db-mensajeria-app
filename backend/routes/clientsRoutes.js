const { customer } = require('../controllers/clientes');
const router = require('express').Router();


router.get('/', customer);

module.exports = router;