const { allCustomer, idCustomer } = require("../models/cliente")

const customer =async (req,res,next)=>{
    try {
        const clients = await allCustomer()
        return res.json(clients);
    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
}

const getCustomerId = async(req, res, next )=>{
    
    const {id}= req.params

    try {
        const clientID = await idCustomer(id);
        if (clientID) {
            res.json(clientID);
          } else {
            res.status(404).json({ mensaje: 'Cliente no encontrado' });
          }
    } catch (error) {
        console.error('Error al obtener el cliente por ID:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}


module.exports = {
    customer,
    getCustomerId,

};