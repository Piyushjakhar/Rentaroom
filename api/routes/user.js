const express = require('express');
const router = express.Router();
const {registerUser, getAllUsers, getUserDetails, deleteUser, loginUser} = require('../controller/userController');
const {userRegisterMiddleware, userDeletionMiddleware, loginUserMiddleware} = require("../middlewares/userMiddlewares");
const {verifyToken} = require("../middlewares/auth");


// user routes
router.post("/register", userRegisterMiddleware, registerUser);
router.get('/', getAllUsers);
router.get('/details', verifyToken, getUserDetails);
router.delete('/', userDeletionMiddleware, deleteUser);
router.get('/login', loginUserMiddleware, loginUser)


module.exports = function (app) {
    app.use("/api/user", router);
};