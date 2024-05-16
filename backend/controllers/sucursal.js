const { allBranch } = require("../models/sucursal")

const branchs =async(req,res,next)=>{
    try {
        const listBranchs = await allBranch();
        res.status(200).json(listBranchs)
    } catch (error) {
        console.error("Error al obtener las sucursales:", error);
        res.status(500).json({ error: 'Error al obtener las sucursales' });
    }
}

    
module.exports = {
    branchs
}