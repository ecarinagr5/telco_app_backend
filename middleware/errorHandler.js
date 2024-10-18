const errorHandler = (err, req, res, next) => {
    res
        .status(400)
        .json({ errorCode: err.statusCode, error: "Unexpected value" });
};

module.exports = errorHandler;