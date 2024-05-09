const express = require("express");
const logger = require("morgan");
require('dotenv').config()
const cors = require('cors')

// crear apliacion en express
const app = express();

// software intermedio
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

// Iniciar servidor
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running ${process.env.PORT}`);
})