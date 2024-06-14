const express = require("express");
const logger = require("morgan");
require('dotenv').config()
const cors = require('cors')
const userRoutes = require("./routes/userRoutes")
const clientsRoutes = require('./routes/clientsRoutes')
const mensajeroRoutes = require('./routes/mensajeroRoutes')

// crear apliacion en express
const app = express();

// software intermedio
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

// Endpoints
app.use('/api/auth', userRoutes)
app.use('/api/clients',clientsRoutes)
app.use('/api/delivery',mensajeroRoutes)

// Iniciar servidor
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running ${process.env.PORT}`);
})