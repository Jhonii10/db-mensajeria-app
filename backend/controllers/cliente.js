const { allCustomer, idCustomer, createNewCustomer, modifyCustomer, deleteByID,  } = require("../models/cliente")

const createCustomer = async (req, res, next)=>{

   const { cedula, nombre, direccion, celular, email} = req.body;


   if ( !cedula || !nombre || !direccion || !celular || !email) {
    return res.status(400).send('Faltan campos');
   }
  
   const id_cliente = Number(cedula)

   try {
    const clientID = await idCustomer(cedula);
    
    if (clientID) {
        return res.status(400).send('El cliente ya está registrado');
    }
    
    await createNewCustomer(id_cliente,cedula, nombre, direccion, celular, email);
    res.status(201).json({
        status:true,
        mensaje: `Cliente ${nombre} creado correctamente`,
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

const editCustomer = async (req, res, next) => {
    const { id: cedula } = req.params;
    const { nombre, direccion, celular, email } = req.body;
    

    if (!cedula || !nombre || !direccion || !celular || !email) {
        return res.status(400).send('Faltan campos');
    }

    const id_cliente = Number(cedula)

    try {
        const result = await modifyCustomer(id_cliente, cedula, nombre, direccion, celular, email);


        if (result.rowCount === 0) {
            return res.status(404).send('Cliente no encontrado');
        }


        return res.status(200).json({
            status: true,
            mensaje: `Cliente con cédula ${cedula} actualizado correctamente`,
        });
    } catch (error) {
        console.error('Error al actualizar el cliente:', error.message);
        return res.status(500).send('Hubo un error intentando actualizar el cliente');
    }
}

const deleteCustomer = async (req, res) => {
    const { id: cedula } = req.params;
    

    try {
        // Llamar al método para eliminar el cliente por su cedula
        const result = await deleteByID(cedula);

        // Verificar si se eliminó el cliente
        if (result.rowCount === 0) {
            return res.status(404).send('Cliente no encontrado para eliminar');
        }

        // Si se encontró y se eliminó el cliente, devolver un mensaje de éxito
        return res.status(200).json({
            status: true,
            mensaje: `Cliente con cédula ${cedula} eliminado correctamente`,
        });
    } catch (error) {
        console.error('Error deleting customer:', error.message);
        return res.status(500).send('Hubo un error intentando eliminar el cliente');
    }
};


module.exports = {
    customer,
    createCustomer,
    getCustomerId,
    editCustomer,
    deleteCustomer

};