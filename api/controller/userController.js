var genFunctions = require('../utility/genFunctions');
const connection = require('../db/connection');
var status_code = require('../utility/statusCodes');
const {encryptPassword} = require('../utility/encryption');

// check if user already exist
var checkOrAddUser = (req, res) => {
    var obj = req.body;
    var name = obj.name;
    var email = obj.email;
    var password = encryptPassword(obj.password);
    var phone = obj.phone;

    let tempsql = "SELECT count(*) as no_of_users from user where phone=? AND deleted_at IS NULL";

    connection.query(tempsql, [phone],(err, rows) => {
        if(err) {
            genFunctions.sendResponse(err, status_code.HTTP_400_NOT_FOUND, req, res, null);
        }
        else if (rows[0].no_of_users > 0) {
            genFunctions.sendResponse(null, status_code.HTTP_404_BAD_REQUEST, req, res, {"message": "User already registered!"})
        }
        else {
            let tempsql = `INSERT INTO user (name, email, password, phone) values ("${name}","${email}","${password}","${phone}")`;
            addNewUser(req, res, tempsql);
        }

    });
}

// add a new user
var addNewUser = (req, res, sql) => {

    connection.query(sql,(err) => {
        if (err) {
            genFunctions.sendResponse(err, status_code.HTTP_400_NOT_FOUND, req, res, null);
        } else {
            genFunctions.sendResponse(null, status_code.HTTP_200_OK, req, res, {"message": "User added successfully"});
        }
});
}

// get list of all the users
var getAllUsers = (req, res) => {
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
var getUserDetails = (req, res) => {
    var id  = req.body.id;
    let sql = "SELECT id,name,email,phone,password,property_id from user where id=?"
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

var checkOrDeleteUser = (req, res) => {
    var id = req.body.id;
    let tempsql = "SELECT count(*) as no_of_users from user where id=? AND deleted_at IS NULL";
    connection.query(tempsql, [id], (err, rows) => {
        if (err) {
            genFunctions.sendResponse(err, status_code.HTTP_400_NOT_FOUND, req, res, null);
        }
        else {
            if (rows[0].no_of_users == 0) {
                genFunctions.sendResponse(null, status_code.HTTP_400_NOT_FOUND, req, res, {"message": "User Does not exist!"});
            }
            else {
                let sql = `UPDATE User set deleted_at = CURRENT_TIMESTAMP where id=${id}`;
                deleteUser(req, res, sql);
            }
        }
    })
}

// delete user
var deleteUser = (req, res, sql) => {
    connection.query(sql, (err, rows) => {
        if (err) {
            genFunctions.sendResponse(err, status_code.HTTP_404_BAD_REQUEST, req, res, null);
        }
        else {
            genFunctions.sendResponse(null, status_code.HTTP_200_OK, req, res, {"message": "User deleted successfully!"});
        }
    });
}


module.exports = {checkOrAddUser, getAllUsers, getUserDetails, checkOrDeleteUser};