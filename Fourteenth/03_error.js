module.exports = (err, req, res, next) => {
    statusCode = err.statusCode || 500;
    message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message
    });
}