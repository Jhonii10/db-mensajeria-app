const { Pool } = require('pg')
// Configuración de la conexión a la base de datos

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

pool.on('error', (err, client) => {
  console.error(err.message, err);
  process.exit(-1);
});

module.exports = pool;