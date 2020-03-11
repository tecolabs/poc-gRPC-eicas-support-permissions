/* jshint indent: 2 */
var sequelize = require('../data/sequelize-config');
var DataTypes = require('sequelize');
module.exports = function () {
    var model = sequelize.define('rols', {
        _id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        enable: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    }, {
        tableName: 'rols',
        timestamps: false
    });

    return model;
};
