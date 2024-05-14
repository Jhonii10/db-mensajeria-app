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


module.exports ={
    allCustomer,
    idCustomer
}