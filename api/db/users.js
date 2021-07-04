const mongoose = require('mongoose');

var usersDB = {};

usersDB.insertProperty = function (obj) {
    return new Promise(function (resolve, reject) {
        const User = mongoose.model('User');
        var usersdata = new User(obj);

        usersdata.save()
            .then(item => {
                resolve("item saved to database");
            })
            .catch(err => {
                reject(err);
            });
    });
}

module.exports = usersDB;