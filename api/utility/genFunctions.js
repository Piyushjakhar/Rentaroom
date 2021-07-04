var genFunctions = {};

genFunctions.sendResponse = function (err, req, res, data) {
    if (err) {
        if (err.status == 1)
            res.status(500);
        else
            res.status(400);
        res.send(err);
    }
    else {
        res.send(data);
    }
    res.end();
};

module.exports = genFunctions;