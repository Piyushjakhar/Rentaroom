const jwt = require('jsonwebtoken');
require('dotenv').config()
const expiry_time = 24 * 60 * 60 // 1 day

const generateToken = (params) => {
    const token = jwt.sign({params}, process.env.SECRET_KEY, {
        algorithm: "HS256",
        expiresIn: expiry_time
    })
    return token;
}

module.exports = {generateToken}