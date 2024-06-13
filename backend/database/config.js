const { Pool } = require('pg')
// Configuración de la conexión a la base de datos

// for develoment
const pool = new Pool({
  "user": "postgres",
  "database": "postgres",
  "password": "pg123", 
  "host": "localhost", 
  "port": 5432, 
  "max": 10, 
  "idleTimeoutMillis": 30000,
})

module.exports = pool;



/**
 * For Production
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  })

  pool.on('error', (err, client) => {
    console.error(err.message, err);
    process.exit(-1);
  });

module.exports = pool;
*/