var genFunctions = {};

genFunctions.sendResponse = function (err, status, req, res, data) {
    if (err) {
        res.status(status).json({
            "error": err
        })

    }
    else {
        res.status(status).json(data);

    }
    res.end();
};

module.exports = genFunctions;