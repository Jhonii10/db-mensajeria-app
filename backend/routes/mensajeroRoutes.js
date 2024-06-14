
const { delivery } = require('../controllers/mensajero');


const router = require('express').Router();


router.get('/', delivery );

module.exports = router;