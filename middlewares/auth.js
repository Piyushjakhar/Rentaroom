const jwt = require("jsonwebtoken");
require('dotenv').config()
const genFunctions = require("../utility/genFunctions");
const status_code = require('../utility/statusCodes');

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        genFunctions.sendResponse(null, status_code.HTTP_400_NOT_FOUND, req, res, {"message": "Token Not Found"});
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
    }
    catch (err) {
        genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req, res, null);
    }
    return next();

}

module.exports = {verifyToken};