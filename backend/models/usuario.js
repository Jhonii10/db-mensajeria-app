const bcrypt = require('bcrypt');
const pool = require('../database/config');
const { generarJWT } = require('../helpers/jwt');

const createUser =async (Name, Email ,Login , Password ,Rol, Address ,Cell_phone ,City, ID )=>{

    const hashedPassword = await bcrypt.hash(Password, 10);

    try {

      await pool.query('BEGIN');
      
      const userResult = await pool.query(
        `INSERT INTO users (Name, Email, Login, Password, Rol, Address, Cell_phone) 
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING ID_User`,
        [Name, Email, Login, hashedPassword, Rol, Address, Cell_phone]
      );

      const userId = userResult.rows[0].id_user;

      if (Rol === 'Customer') {
        await pool.query(
          `INSERT INTO customer (ID_Customer, ID_User, City)
           VALUES ($1, $2, $3)`,
          [ID, userId, City]
        );
      } else if (Rol === 'Delivery') {
        await pool.query(
          `INSERT INTO delivery (ID_Delivery, ID_User, City)
           VALUES ($1, $2, $3)`,
          [ID, userId, City]
        );
      }
  
      await pool.query('COMMIT');

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

const ITEMS_PER_PAGE = 8;
const allUsers = async(query , currentPage)=>{
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
      const result = await pool.query(` 
      SELECT
      users.id_user,
      users.name,
      users.email,
      users.rol,
      users.address,
      users.cell_phone
      FROM users
      WHERE 
        (
          LOWER(users.name) LIKE LOWER($1) 
          OR LOWER(users.email) LIKE LOWER($1)
          OR LOWER(users.rol) LIKE LOWER($1)
          OR LOWER(users.address) LIKE LOWER($1)
          OR users.cell_phone::text LIKE $1
        )
        AND users.rol != 'Manager'
      ORDER BY users.id_user DESC
      LIMIT $2 OFFSET $3`,['%' + query + '%', ITEMS_PER_PAGE, offset]);
      const data = result.rows;
      return data
  } catch (error) {
      throw new Error(error.message)
  }
}

const fetchUserById =  async (userId) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE ID_User = $1', [userId]);
    return result.rows[0]
  } catch (error) {
    throw new Error(error.message)
  }
}

const  updateUser = async (id, name, email, address, cellPhone)=>{
  const result = await pool.query(
    'UPDATE users SET Name = $1, Email = $2, Address = $3, Cell_phone = $4 WHERE ID_User = $5 RETURNING *',
    [name, email, address, cellPhone, id]
  );
  return result.rows[0];
}

const removeUser = async (userId) => {
  try {
    await pool.query('DELETE FROM users WHERE ID_User = $1', [userId]);
    return {
      success: true,
      message: 'Usuario eliminado correctamente'
    };
  } catch (error) {
    console.error('Error eliminando el usuario:', error);
    throw new Error('Hubo un error intentando eliminar el usuario');
  }
}

module.exports = {
    createUser,
    findUserByEmail,
    getUserbyEmailOrUserName,
    comparePasswords, 
    allUsers,
    fetchUserById,
    updateUser,
    removeUser,
}

