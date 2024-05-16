const { branchs } = require('../controllers/sucursal');

const router = require('express').Router();


router.get('/', branchs);

module.exports = router;