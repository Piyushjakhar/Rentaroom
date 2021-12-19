const genFunctions = require('../utility/genFunctions');
const connection = require('../db/connection');
const status_code = require('../utility/statusCodes');
const {encryptPassword} = require('../utility/encryption');
const {generateToken} = require('../utility/authentication');


// register a new user
const registerUser = (req, res) => {
    var obj = req.body;
    var name = obj.name;
    var email = obj.email;
    var password = encryptPassword(obj.password);
    var phone = obj.phone;

    let tempsql = `INSERT INTO User (name, email, password, phone) values ("${name}","${email}","${password}","${phone}")`;

    connection.query(tempsql,(err, rows) => {
        if(err) {
            genFunctions.sendResponse(err, status_code.HTTP_400_NOT_FOUND, req, res, null);
        }
        else {
            genFunctions.sendResponse(null, status_code.HTTP_200_OK, req, res, {"message": "User added successfully"});
        }

    });
}


// get list of all the users
const getAllUsers = (req, res) => {
    connection.query("SELECT id,name,email,phone,password,property_id from User",  (err, rows) => {
        if (!err) {
            genFunctions.sendResponse(null, status_code.HTTP_200_OK, req, res, rows);
        }
        else {
            genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req,res, null);
        }
    });
}

// get particular user details
const getUserDetails = (req, res) => {
    var id  = req.body.id;
    let sql = "SELECT id,name,email,phone,password,property_id from User where id=?"
    connection.query(sql, [id], (err,rows) => {
        if (err) {
            genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req, res, null);
        }
        else {
            if (rows.length >0) {
            genFunctions.sendResponse(null, status_code.HTTP_200_OK, req, res, rows);
            }
            else {
                genFunctions.sendResponse(null, status_code.HTTP_400_NOT_FOUND, req, res, {"message": "User not found!!"});
            }
        }
    })
}

// delete user
const deleteUser = (req, res) => {
    var id = req.body.id;
    let sql = `UPDATE User set deleted_at = CURRENT_TIMESTAMP where id=${id}`;
    connection.query(sql, [id], (err, rows) => {
        if (err) {
            genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req, res, null);
        }
        else {
            genFunctions.sendResponse(null, status_code.HTTP_200_OK, req, res, {"message": "User deleted successfully!"});
        }
    })
}

const loginUser = (req, res) => {
    const phone = req.body.phone;
    const password = encryptPassword(req.body.password);

    const token = generateToken({
        "phone": phone,
        "password": password
    })

    genFunctions.sendResponse(null, status_code.HTTP_200_OK, req, res, {"token": token});
}

module.exports = {registerUser, getAllUsers, getUserDetails, deleteUser, loginUser};