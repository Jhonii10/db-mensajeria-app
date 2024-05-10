const { register } = require('../controllers/usuario');


const router = require('express').Router();

router.post('/register', register);

module.exports = router;