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

const modifyCustomer = async(id_cliente, cedula, nombre, direccion, celular, email)  => {
    console.log(id_cliente, cedula, nombre, direccion, celular, email);
    const query = 'UPDATE cliente SET nombre = $3, direccion = $4, celular = $5, email = $6 WHERE id_cliente =$1 OR cedula = $2 ';
    const values = [id_cliente,cedula, nombre, direccion, celular, email];

    try {
        const result = await pool.query(query, values);
        return result; 
    } catch (error) {
        console.error('Error updating customer:', error.message);
        throw new Error('Error updating customer: ' + error.message);
    }
}


module.exports ={
    allCustomer,
    idCustomer,
    createNewCustomer,
    modifyCustomer
}