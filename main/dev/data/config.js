const CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = '8080';

CONFIG.db_dialect   = process.env.MYSQL_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.MYSQL_IP       || 'localhost';
CONFIG.db_port      = process.env.MYSQL_PORT       || '3306';
CONFIG.db_name      = process.env.MYSQL_DATABASE      || 'eicas_relational';
CONFIG.db_user      = process.env.MYSQL_USER       || 'root';
CONFIG.db_password  = process.env.MYSQL_PASSWORD   || 'root';


CONFIG.db_details = {
    host: CONFIG.db_host,
    port: CONFIG.db_port,
    dialect: CONFIG.db_dialect
};
module.exports = CONFIG;
