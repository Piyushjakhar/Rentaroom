var express = require('express');
var router = express.Router();
var {addNewUser, getAllUsers, getUserDetails} = require('../controller/userController');


// user routes
router.post("/", addNewUser);
router.get('/', getAllUsers);
router.get('/:id', getUserDetails);


module.exports = function (app) {
    app.use("/api/user", router);
};