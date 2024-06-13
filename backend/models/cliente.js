const pool = require("../database/config")


const allCustomer = async(query)=>{
    console.log(query);
    try {
        const result = await pool.query(`
        SELECT
        customer.id_customer AS id,
        users.name,
        users.email,
        COUNT(service.id_service) AS total_services,
        SUM(service.number_of_packages) AS total_packages,
        SUM(CASE WHEN status.type_status = 'Delivered' THEN 1 ELSE 0 END) AS total_delivered,
        SUM(CASE WHEN status.type_status = 'Pickedup' THEN 1 ELSE 0 END) AS total_pickedup,
        SUM(CASE WHEN status.type_status = 'Required' THEN 1 ELSE 0 END) AS total_required
        FROM customer
        INNER JOIN users ON customer.id_user = users.id_user
        LEFT JOIN service ON customer.id_customer = service.id_customer
        LEFT JOIN status ON service.id_service = status.id_service
        WHERE LOWER(users.name) LIKE LOWER($1)
        GROUP BY customer.id_customer, users.name, users.email
        ORDER BY users.name ASC

    `,['%'+ query +'%']); 
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