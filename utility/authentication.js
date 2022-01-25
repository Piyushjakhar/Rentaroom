const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require("../utility/keys");
const expiry_time = 24 * 60 * 60 // 1 day

const generateToken = (params) => {
    const token = jwt.sign({params}, SECRET_KEY, {
        algorithm: "HS256",
        expiresIn: expiry_time
    })
    return token;
}

module.exports = {generateToken}