const { allDelivery } = require("../models/mensajero");

const delivery =async (req,res,next)=>{
    
    try {
        const clients = await allDelivery()
        return res.json(clients);
    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
}


module.exports = {
    delivery,

};