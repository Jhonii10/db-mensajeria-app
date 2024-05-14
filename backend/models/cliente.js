const pool = require("../database/config")


const allCustomer = async()=>{
    try {
        const result = await pool.query('SELECT * FROM cliente');
        const data = result.rows;
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}


const idCustomer = async (id)=>{
    try {
        const result = await pool.query('SELECT * FROM cliente WHERE cedula = $1',[id])
        const data = result.rows[0]
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}

const createNewCustomer = async (id_cliente,cedula, nombre, direccion, celular, email)=>{
    const query = 'INSERT INTO cliente (id_cliente, cedula, nombre, direccion, celular, email) VALUES ($1, $2, $3,$4,$5,$6)';
    const values = [id_cliente, cedula, nombre, direccion, celular, email];
    try {
        await pool.query(query, values);
    } catch (error) {
        throw new Error(error.message)
    }
    
}


module.exports ={
    allCustomer,
    idCustomer,
    createNewCustomer
}