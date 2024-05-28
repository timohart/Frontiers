const sql = require('mssql');

const config = {
  user: 'dev1', // Replace with your database username
  password: 'Password1!', // Replace with your database password
  server: 'frontiers.database.windows.net', // Replace with your server name
  database: 'Frontiers', // Replace with your database name
  options: {
    encrypt: true, // Use encryption
    enableArithAbort: true,
  },
};

async function connectToDatabase() {
  try {
    let pool = await sql.connect(config);
    console.log('Connected to Azure SQL Database');
    return pool;
  } catch (err) {
    console.error('Database connection failed: ', err);
    throw err;
  }
}

module.exports = {
  connectToDatabase,
};
