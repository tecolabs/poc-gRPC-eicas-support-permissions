var Rol = require('../models/rols'),
    Permissions = require('../models/permissions'),
    Resources = require('../models/resources');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config.js');
const db = require('../data/sequelize-config');
const CONFIG = require('../data/config');


exports.verifyPermissions = async function (req, res, next) {
    var errorRes = {
        status: 0,
        message: '',
    };

    var objectReturn = {
        error: errorRes,
        verificado: false
    };
    var token = req.token;
    // decode token
    if (token) {
        // verifies secret and checks exp
        let decoded;
        try {
            decoded = await jwt.verify(token, config.secretKey);
        } catch (err) {
            errorRes.message = 'El usuario no esta logueado!';
            errorRes.status = 401;
            objectReturn.error = errorRes;
            objectReturn.verificado = false;
        }
        let rol;
        let permissions;
        let rolEncontrado = {
            permissions: [],
        };
        try {
            // Todo Leo: Login  deberia ser contra decoded._doc._id_rol
            console.log("decoded:" + decoded.toString());
            if (decoded && decoded._id_rol) {
                rol = await Rol().findAll({
                    limit: 1,
                    where: {
                        _id:decoded._id_rol
                    },
                });
                if (rol[0]) {
                    permissions = await Permissions().findAll({
                        where: {
                            _id_rol: rol[0]._id
                        },
                        include: [{
                            model: Resources(),
                        }]
                    });
                    rolEncontrado = {...rol[0], permissions: permissions};
                }
                if (rolEncontrado.permissions.length) {
                    for (var i = 0; i < rolEncontrado.permissions.length; i++) {
                        if (req.baseUrl.search(rolEncontrado.permissions[i].resource.name.toLowerCase()) > -1) {
                            if (req.method === 'GET' && rolEncontrado.permissions[i].canRead) {
                                objectReturn.verificado = true;
                            } else if ((req.method === 'PUT' || req.method === 'POST') && rolEncontrado.permissions[i].canWrite) {
                                objectReturn.verificado = true;
                            } else if (req.method === 'DELETE' && rolEncontrado.permissions[i].canDelete) {
                                objectReturn.verificado = true;
                            }
                        }
                    }
                }
                if (!objectReturn.verificado) {
                    errorRes.message = 'No se tienen permisos para realizar esta acción';
                    errorRes.status = 403;
                    objectReturn.error = errorRes;
                    objectReturn.verificado = false;
                }
                return objectReturn;
            } else {
                errorRes.message = 'El usuario no esta logueado!';
                errorRes.status = 401;
                objectReturn.error = errorRes;
                objectReturn.verificado = false;
                return objectReturn;
            }
        } catch (e) {
            throw e;
        }
    } else {
        errorRes.message = 'No se envió un token con la petición!';
        errorRes.status = 403;
        objectReturn.error = errorRes;
        objectReturn.verificado = false;
        return objectReturn;
    }
};

