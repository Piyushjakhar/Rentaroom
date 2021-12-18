var express = require('express');
var router = express.Router();
var genFunctions = require('../utility/genFunctions');
var status_code = require('../utility/statusCodes');

router.post("/", (req, res) => {
    var obj = req.body;
    propertyDB.insertProperty(obj).then(result => {
        genFunctions.sendResponse(null, req, res, result);
    }).catch(err => {
        sendResponse(err, req, res, null);
    });
});

router.get('/', function (req, res, next) {
    genFunctions.sendResponse(null, status_code.HTTP_200_OK, req, res, "Get API for Property Collection");
});

module.exports = function (app) {
    app.use("/api/property", router);
};
