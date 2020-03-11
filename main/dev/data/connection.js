const mysql = require('mysql');
const CONFIG = require('./config');
const config = {

    host: CONFIG.db_host,
    user: CONFIG.db_user,
    password: CONFIG.db_password,
    database: CONFIG.db_name,
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;