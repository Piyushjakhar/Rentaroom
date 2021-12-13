var express = require('express');
var router = express.Router();
var genFunctions = require('../utility/genFunctions');

router.post("/", (req, res) => {
    var obj = req.body;
    usersDB.insertProperty(obj).then(result => {
        genFunctions.sendResponse(null, req, res, result);
    }).catch(err => {
        sendResponse(err, req, res, null);
    });
});


router.get('/', function (req, res, next) {
    genFunctions.sendResponse(null, req, res, "Get API for User Collection");
});

module.exports = function (app) {
    app.use("/api/user", router);
};