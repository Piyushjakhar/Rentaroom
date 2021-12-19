const express = require('express');
const router = express.Router();
const {registerUser, getAllUsers, getUserDetails, deleteUser, loginUser} = require('../controller/userController');
const {userRegisterMiddleware, userDeletionMiddleware, loginUserMiddleware} = require("../middlewares/userMiddlewares");
const {verifyToken} = require("../middlewares/auth");
const {loginValidation, registerValidation} = require('../validations/userValidations');


// user routes
router.post("/register", registerValidation, userRegisterMiddleware, registerUser);
router.get('/', getAllUsers);
router.get('/details', verifyToken, getUserDetails);
router.delete('/', verifyToken, userDeletionMiddleware, deleteUser);
router.get('/login', loginValidation, loginUserMiddleware, loginUser)


module.exports = function (app) {
    app.use("/api/user", router);
};