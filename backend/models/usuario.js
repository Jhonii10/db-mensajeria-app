const bcrypt = require('bcrypt');
const pool = require('../database/config');
const { generarJWT } = require('../helpers/jwt');

const createUser =async (Name, Email ,Login , Password ,Rol, Address ,Cell_phone)=>{

    const hashedPassword = await bcrypt.hash(Password, 10);

    try {
      await pool.query(
        `INSERT INTO users (Name, Email ,Login , Password ,Rol, Address ,Cell_phone) 
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [Name, Email ,Login , hashedPassword ,Rol, Address ,Cell_phone ]
      );

     const token = await generarJWT(Email , Login)

      return { 
        success: true,
        message: 'Usuario creado correctamente',
        user:{
            Name,
            Login,
            Email,
        },
        token
      };
    } catch (error) {
      console.error('Error creando el usuario:', error);
      throw new Error('Hubo un error intentando crear el usuario');
    }

}

const findUserByEmail = async (email)=>{
    const userExists = await pool.query(`SELECT * FROM users WHERE email = $1`, [
        email,
      ]);
      return userExists.rows.length > 0;
}

const getUserbyEmailOrUserName = async(login)=>{
    try {
        const user = await pool.query('SELECT * FROM users WHERE Email = $1 or Login = $1', [login]);
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
      const result = await pool.query('SELECT * FROM users');
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

