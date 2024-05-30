
const { register, login, users, editUserById, getUserById, deleteUser } = require('../controllers/usuario');


const router = require('express').Router();

router.get('/users',users );
router.get('/edit/:id', getUserById );
router.post('/register', register);
router.post('/login', login);
router.put('/edit/:id', editUserById);
router.delete('/delete/:id', deleteUser);


module.exports = router;
