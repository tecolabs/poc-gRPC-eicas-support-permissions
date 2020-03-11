/* jshint indent: 2 */
var sequelize = require('../data/sequelize-config');
var DataTypes = require('sequelize');
module.exports = function () {
    var users = sequelize.define('users', {
        _id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        salt: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        hash: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        admin: {
            type: DataTypes.STRING(1),
            allowNull: true
        },
        enable: {
            type: DataTypes.STRING(1),
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        fistname: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        _v: {
            type: "DOUBLE",
            allowNull: true
        }
    }, {
        tableName: 'users',
        timestamps: false
    });

    return users;
};
