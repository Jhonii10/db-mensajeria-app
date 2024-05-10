const { findUserByEmail, createUser } = require("../models/usuario");


const register = async (req, res, next)=>{
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).send('Faltan campos');
      }
  
      try {
        const userExists = await findUserByEmail(email);
        if (userExists) {
          return res.status(400).send('El usuario ya está registrado');
        }
  
        const result = await createUser(name, email, password);
        res.status(201).json(result);
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Hubo un error intentando crear el usuario');
      }
}

module.exports = {
    register
}