const { response } = require("express");
const { generarJWT } = require("../helpers/jwt");
const
{ 
  findUserByEmail, 
  createUser, 
  getUserbyEmail,
  comparePasswords,
  allUsers,
  getUserbyEmailOrUserName
} = require("../models/usuario");


const register = async (req, res, next)=>{
    const {id_usuario, username, contraseña, email, celular, direccion, id_cliente,nombre} = req.body;

    if (!id_usuario || !username || !contraseña || !email || !celular || !direccion || !id_cliente || !nombre ) {
        return res.status(400).send('Faltan campos');
      }
  
      try {
        const userExists = await findUserByEmail(email);
        console.log(userExists);
        if (userExists) {
          return res.status(400).send('El usuario ya está registrado');
        }
  
        const result = await createUser(id_usuario, username, contraseña, email, celular, direccion, id_cliente,nombre);
        res.status(201).json(result);
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Hubo un error intentando crear el usuario');
      }
}


const login = async (req , res , next)=>{
    const {username, contraseña} = req.body;

    if (!username || !contraseña) {
        return res.status(400).json({ message: 'Por favor ingresa tu usuario y contraseña' });
    }

   
    try {

        const user = await getUserbyEmailOrUserName(username);  
        
        if (!user) {
            return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos', status: false });
          }

        const validPassword = await comparePasswords(contraseña, user.contraseña);


        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta', status: false });
          }

          const token = await generarJWT(user.id_usuario , user.email)

          res.json({
            status: true,
            user: {
              id: user.id_usuario,
              username: user.username,
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

const users = async(req, res, next)=>{
  try {
    const listBranchs = await allUsers();
    res.status(200).json(listBranchs)
} catch (error) {
    console.error("Error al obtener los usuario:", error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
}
}

module.exports = {
    register,
    login,
    revalidarToken,
    users
}