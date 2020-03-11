'use strict';

var config = require('./config'),
    Sequelize = require('sequelize');

module.exports = new Sequelize(
    config.db_name,
    config.db_user,
    config.db_password,
    config.db_details
);