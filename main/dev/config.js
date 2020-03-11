const logger = require('winston');

var getConfig = function () {
    module.exports =
        {
            'secretKey': '12345-67890-09876-54321',
            "refreshTokenSecret": "fdb8fdbecf1d03ce5e6125c067733c0d51de209c",
            "tokenLife": 900,
            "refreshTokenLife": 86400
        }

};
getConfig();
