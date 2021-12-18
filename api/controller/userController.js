var genFunctions = require('../utility/genFunctions');
const connection = require('../db/connection');
var status_code = require('../utility/statusCodes');

// check if user already exist
var checkOrAddUser = (req, res) => {
    var obj = req.body;
    var name = obj.name;
    var email = obj.email;
    var password = obj.password;
    var phone = obj.phone;

    let tempsql = "SELECT count(*) as no_of_users from user where phone=?";

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
    connection.query("SELECT * from User",  (err, rows, fields) => {
        if (!err) {
            res.send(rows);

        }
    });
}

// get particular user details
var getUserDetails = (req, res) => {
    var id  = req.params.id;
    let sql = "SELECT * from user where id=?"
    connection.query(sql, id, (req,res) => {
        res.send("x");
    })
}

var deleteUser = (req, res) => {
    var id = req.params.id;

}


module.exports = {checkOrAddUser, getAllUsers, getUserDetails};