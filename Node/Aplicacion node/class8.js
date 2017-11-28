var config = require('./config');
var jwt = require('jwt-simple');
var moment = requre('moment');

exports.createToken = function(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: momen().add(1,"hours").unix(),
    };
    return jwt.encode(payload, config.TOKEN_PASS);
};

exports.ensureAuthenticated = function(req, res, next) {
    if(!req.headers.authorization) {
        return res
        .status(403)
        .send({message: "Error"});
    }

    var token = req.headers.authorization.split(" ")[1];
    var payload = jwt.decode(token, config.TOKEN_PASS);

    if(payload.exp <= moment().unix()){
    return res
    .status(401)
    .send({message: "The token expires"});
    }
    req.user = payload.sub;
    next();
}