const pool = require("../database/config")


const allDelivery = async()=>{

    try {
        const result = await pool.query(`
        SELECT 
        u.ID_User, 
        u.Name, 
        u.Email, 
        u.Address,  
        u.Cell_phone, 
        d.ID_Delivery 
        FROM 
            users u
        JOIN 
            delivery d 
        ON 
            u.ID_User = d.ID_User
        WHERE 
            u.Rol = 'Delivery';

    `); 
        const data = result.rows;
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}


module.exports ={
    allDelivery,
}