const { allCustomer, idCustomer, createNewCustomer, modifyCustomer, deleteByID,  } = require("../models/cliente")

const createCustomer = async (req, res, next)=>{

   const { id_user,id_customer,City} = req.body;


   if ( !id_user || !id_customer || !City ) {
    return res.status(400).send('Faltan campos');
   }

   try {
    const clientID = await idCustomer(id_customer);
    
    if (clientID) {
        return res.status(400).send('El cliente ya está registrado');
    }
    
    await createNewCustomer(id_user,id_customer,City);
    res.status(201).json({
        status:true,
        mensaje: `Cliente creado correctamente`,
    });

   } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Hubo un error intentando crear el cliente');
   } 
}

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
    createCustomer,
    getCustomerId,

};