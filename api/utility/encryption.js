var md5 = require('md5');


encryptPassword = (params) => {
    return md5([params]);
}

module.exports = {encryptPassword}