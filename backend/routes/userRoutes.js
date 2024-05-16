
const { register, login, users } = require('../controllers/usuario');


const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.get('/',users )

module.exports = router;
