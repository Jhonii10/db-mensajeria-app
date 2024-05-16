const pool = require("../database/config")

const allBranch =async ()=>{
       try {
        const result = await pool.query('SELECT * FROM sucursal');
        const data = result.rows;
        return data;
       } catch (error) {
         throw new Error(error.message)
       }

}


module.exports = {
    allBranch
}