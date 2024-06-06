const pool = require("../database/config")


const allCustomer = async()=>{
    try {
        const result = await pool.query(`SELECT * from customer`);
        const data = result.rows;
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}


const idCustomer = async (id)=>{
    try {
        const result = await pool.query('SELECT * FROM customer WHERE id_customer = $1',[id])
        const data = result.rows[0]
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}

const createNewCustomer = async (ID_Customer, ID_User, City)=>{
    const query = 'INSERT INTO customer (ID_Customer, ID_User, City) VALUES ($1, $2, $3)';
    const values = [ID_Customer, ID_User, City];
    try {
        await pool.query(query, values);
    } catch (error) {
        throw new Error(error.message)
    }
    
}



module.exports ={
    allCustomer,
    idCustomer,
    createNewCustomer,
}