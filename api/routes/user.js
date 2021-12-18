var express = require('express');
var router = express.Router();
var {checkOrAddUser, getAllUsers, getUserDetails} = require('../controller/userController');


// user routes
router.post("/", checkOrAddUser);
router.get('/', getAllUsers);
router.get('/:id', getUserDetails);


module.exports = function (app) {
    app.use("/api/user", router);
};