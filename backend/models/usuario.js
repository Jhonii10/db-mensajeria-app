const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const pool = require('../database/config');
const { generarJWT } = require('../helpers/jwt');

const createUser =async (name, email ,password)=>{

    const id = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await pool.query(
        `INSERT INTO users (id, name, email, password) 
         VALUES ($1, $2, $3, $4)`,
        [id, name, email, hashedPassword]
      );

     const token = await generarJWT(id , email)

      return { 
        success: true,
        message: 'Usuario creado correctamente',
        user:{
            id,
            name,
            email
        },
        token
      };
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Hubo un error intentando crear el usuario');
    }

}

const findUserByEmail = async (email)=>{
    const userExists = await pool.query(`SELECT * FROM users WHERE email = $1`, [
        email,
      ]);
      return userExists.rows.length > 0;
}

module.exports = {
    createUser,
    findUserByEmail
}

