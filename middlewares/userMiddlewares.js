const connection = require('../db/connection');
const genFunctions = require('../utility/genFunctions');
const status_code = require('../utility/statusCodes');
const {encryptPassword} = require('../utility/encryption');

const userRegisterMiddleware = (req, res, next) => {
    const phone = req.body.phone;
    let tempsql = "SELECT count(*) as no_of_users from User where phone=? AND deleted_at IS NULL"; 
    connection.query(tempsql, [phone], (err, rows) => {
        if (err) {
            genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req, res, null);
        }
        else {
            if (rows[0].no_of_users > 0) {
                genFunctions.sendResponse(null, status_code.HTTP_404_BAD_REQUEST, req, res, {"message": "User already registered!"})
            }
            else {
                return next();
            }
        }
        
    })
}

const userDeletionMiddleware = (req, res, next) => {
    const id = req.body.id;
    let tempsql = "SELECT count(*) as no_of_users from User where id=? AND deleted_at IS NULL"; 
    connection.query(tempsql, [id], (err, rows) => {
        if (err) {
            genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req, res, null);
        }
        else {
            if (rows[0].no_of_users == 0) {
                genFunctions.sendResponse(null, status_code.HTTP_404_BAD_REQUEST, req, res, {"message": "User does not exist!"});
            }
            else {
                return next();
            }
        }
        
    })
}

const loginUserMiddleware = (req, res, next) => {
    const phone = req.body.phone;
    const password = req.body.password;
    let tempsql = "SELECT count(*) as no_of_users from User where phone=? AND deleted_at IS NULL";
    connection.query(tempsql, [phone], (err, rows) => {
        if (err) {
            genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req, res, null);
        }
        else {
            if (rows[0].no_of_users == 0) {
                genFunctions.sendResponse(null, status_code.HTTP_404_BAD_REQUEST, req, res, {"message": "User does not exist!"});
            }
            else {
                // check if the password matches the stored password
                let sql = `SELECT password from User where phone = "${phone}"`;
                connection.query(sql, (err, rows) => {
                    if (err) {
                        genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req, res, null);
                    }
                    else {
                        if (rows[0].password!= encryptPassword(password)) {
                            genFunctions.sendResponse("Password doesn't match", status_code.HTTP_404_BAD_REQUEST, req, res, null);
                        }
                        else {
                            return next();
                        }
                    }
                })
            }

        }
    })
    

    

}

module.exports = {userRegisterMiddleware, userDeletionMiddleware, loginUserMiddleware}