/* jshint indent: 2 */
var sequelize = require('../data/sequelize-config');
var DataTypes = require('sequelize');
module.exports = function () {
    var model = sequelize.define('resources', {
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
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        tableName: 'resources',
        timestamps: false
    });

    return model;
};
