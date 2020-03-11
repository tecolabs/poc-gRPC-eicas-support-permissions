/* jshint indent: 2 */
var sequelize = require('../data/sequelize-config');
var DataTypes = require('sequelize');
var Users = require('./users');
var Roles = require('./rols');

module.exports = function () {
    var model = sequelize.define('users_x_rols', {
        _id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        _id_user: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'users',
                key: '_id'
            }
        },
        _id_rol: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'rols',
                key: '_id'
            }
        }
    }, {
        tableName: 'users_x_rols',
        timestamps: false
    });
    let user = Users();
    let rol = Roles();
    model.hasOne(user, {foreignKey: '_id_user', target: '_id'});
    model.hasOne(rol, {foreignKey: '_id_rols', target: '_id'});
    return model;
};
