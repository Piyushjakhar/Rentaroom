var express = require('express');
var router = express.Router();
var {checkOrAddUser, getAllUsers, getUserDetails, checkOrDeleteUser} = require('../controller/userController');


// user routes
router.post("/", checkOrAddUser);
router.get('/', getAllUsers);
router.get('/', getUserDetails);
router.delete('/', checkOrDeleteUser);


module.exports = function (app) {
    app.use("/api/user", router);
};