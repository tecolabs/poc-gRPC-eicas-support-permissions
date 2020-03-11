var PROTO_PATH = './protos/verify.proto';
var verify = require('./services/verifyService');


var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var verify_proto = grpc.loadPackageDefinition(packageDefinition).verify;

async function autorization(call, callback) {
    var request = call.request;
    let res = await verify.verifyPermissions(request);
    callback(null,
        {
            autorizationResponse: res.verificado,
            errorMessage: res.error.message,
            errorStatus: res.error.status,
        })
}

function main() {
    var server = new grpc.Server();
    server.addService(verify_proto.VerifyPermissions.service, {
        autorization: autorization
    });
    server.bind( '0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();
