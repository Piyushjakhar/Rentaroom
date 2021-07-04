const mongoose = require('mongoose');

var propertyDB = {};

propertyDB.insertProperty = function (obj) {
    return new Promise(function (resolve, reject) {
        const Property = mongoose.model('Property');
        var propertydata = new Property(obj);

        propertydata.save()
            .then(item => {
                resolve("item saved to database");
            })
            .catch(err => {
                reject(err);
            });
    });
}

module.exports = propertyDB;