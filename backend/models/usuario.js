const bcrypt = require('bcrypt');
const pool = require('../database/config');
const { generarJWT } = require('../helpers/jwt');

const createUser =async (id_usuario, username, contraseña, email, celular, direccion, id_cliente,nombre)=>{

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    try {
      await pool.query(
        `INSERT INTO usuario (id_usuario, username, contraseña, email, celular, direccion, id_cliente,nombre) 
         VALUES ($1, $2, $3, $4, $5, $6, $7,$8)`,
        [id_usuario, username, hashedPassword, email, celular, direccion, id_cliente,nombre ]
      );

     const token = await generarJWT(id_usuario , username)

      return { 
        success: true,
        message: 'Usuario creado correctamente',
        user:{
            id_usuario,
            username,
            email,
        },
        token
      };
    } catch (error) {
      console.error('Error creando el usuario:', error);
      throw new Error('Hubo un error intentando crear el usuario');
    }

}

const findUserByEmail = async (email)=>{
    const userExists = await pool.query(`SELECT * FROM usuario WHERE email = $1`, [
        email,
      ]);
      return userExists.rows.length > 0;
}

const getUserbyEmailOrUserName = async(username)=>{
    try {
        const user = await pool.query('SELECT * FROM usuario WHERE email = $1 or username = $1', [username]);
        return user.rows[0];
      } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Hubo un error al buscar el usuario');
      }
}

const comparePasswords = async (password , hashedPassword)=>{
    return await bcrypt.compare(password, hashedPassword);
}

const allUsers = async()=>{
  try {
      const result = await pool.query('SELECT * FROM usuario');
      const data = result.rows;
      return data
  } catch (error) {
      throw new Error(error.message)
  }
}

module.exports = {
    createUser,
    findUserByEmail,
    getUserbyEmailOrUserName,
    comparePasswords,
    allUsers
}

