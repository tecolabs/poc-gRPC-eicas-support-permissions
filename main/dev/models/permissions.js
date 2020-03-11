/* jshint indent: 2 */
var sequelize = require('../data/sequelize-config');
var DataTypes = require('sequelize');
var Resources = require('./resources');

module.exports = function () {
    var permissions = sequelize.define('permissions', {
        _id_resource: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'resources',
                key: '_id'
            }
        },
        _id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        canWrite: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        canRead: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        canDelete: {
            type: DataTypes.BOOLEAN,
            allowNull: true
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
        tableName: 'permissions',
        timestamps: false
    });

    let resource = Resources();
    permissions.belongsTo(resource, {foreignKey: '_id_resource'});

    return permissions;
};
