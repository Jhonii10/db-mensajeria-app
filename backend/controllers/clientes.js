const { allCustomer } = require("../models/cliente")

const customer =async (req,res,next)=>{
    try {
        const clients = await allCustomer()
        return res.json(clients);
    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
}


module.exports = {
    customer,
};