const { response } = require("express");
const { generarJWT } = require("../helpers/jwt");
const
{ 
  findUserByEmail, 
  createUser,
  comparePasswords,
  allUsers,
  getUserbyEmailOrUserName,
  fetchUserById,
  updateUser,
  removeUser,
} = require("../models/usuario");


const register = async (req, res, next)=>{
    const {Name, Email ,Login , Password ,Rol, Address ,Cell_phone , City, ID } = req.body;

    if (!Name || !Email || !Login || !Password || !Rol || !Address || !Cell_phone || !City || !ID ) {
        return res.status(400).send('Faltan campos');
      }
  
      try {
        const userExists = await findUserByEmail(Email);
        if (userExists) {
          return res.status(400).send('El usuario ya está registrado');
        }
  
        const result = await createUser(Name, Email ,Login , Password ,Rol, Address ,Cell_phone, City, ID );
        if (result) {

          const token = await generarJWT(ID , Email)

          res.status(201).json({
            status: true,
            user: {
              name:Name,
              email:Email,
              roll:Rol,
              token
            },
            
          });
        }
        
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Hubo un error intentando crear el usuario');
      }
}


const login = async (req , res , next)=>{
    const {login, password} = req.body;

    if (!login || !password) {
        return res.status(400).json({ message: 'Por favor ingresa tu usuario y contraseña' });
    }

   
    try {

        const user = await getUserbyEmailOrUserName(login);  
        
        if (!user) {
            return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos', status: false });
          }

        const validPassword = await comparePasswords(password, user.password);


        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta', status: false });
          }

          const token = await generarJWT(user.id_user , user.Email)

          res.json({
            status: true,
            user: {
              id: user.id_user,
              login: user.login,
              email: user.email,
              roll: user.rol,
              token
            },
            
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

  const { query, currentPage } = req.body;

  try {
    const listBranchs = await allUsers(query, currentPage);
    res.status(200).json(listBranchs)
} catch (error) {
    console.error("Error al obtener los usuario:", error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
}
}

const getUserById =async (req, res, next)=>{
  const userId = req.params.id;
  try {
    const user = await fetchUserById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


const editUserById = async (req, res, next)=>{
  const userId = req.params.id;
  
  const { name, email, address, cell_phone } = req.body;
  try {

    const user = await fetchUserById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
    

      await updateUser(userId, name, email, address, cell_phone);  

      return res.status(200).json({
        mensaje: `usuario actualizado correctamente`,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteUser = async (req, res) => {

  const { id } = req.params;

  try {
    const result = await removeUser(id);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error eliminando el usuario:', error);
    res.status(500).json({
      success: false,
      message: 'Hubo un error intentando eliminar el usuario'
    });
  }
};


module.exports = {
    register,
    login,
    revalidarToken,
    users,
    editUserById,
    getUserById,
    deleteUser
    
}