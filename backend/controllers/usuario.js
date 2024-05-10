const { response } = require("express");
const { generarJWT } = require("../helpers/jwt");
const
{ 
  findUserByEmail, 
  createUser, 
  getUserbyEmail,
  comparePasswords
} = require("../models/usuario");


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


const login = async (req , res , next)=>{
    const {email , password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Por favor ingresa tu correo y contraseña' });
    }

   
    try {

        const user = await getUserbyEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos', status: false });
          }

        const validPassword = await comparePasswords(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña es incorrecta', status: false });
          }

          const token = await generarJWT(user.id , user.email)

          res.json({
            status: true,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
            token,
          });
    
        
    } catch (error) {
        console.error('Error autenticando al usuario:', error);
      res.status(500).json({ message: 'Hubo un error al autenticar al usuario' })
    }
}


const revalidarToken = async (req, res = response ) => {

    const { id, email } = req;

    const token = await generarJWT( id, email );

    res.json({
        status: true,
        id,
        email,
        token
    })
}

module.exports = {
    register,
    login,
    revalidarToken
}