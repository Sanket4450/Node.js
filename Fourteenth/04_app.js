const express = require('express');
const app = express();
const port = 1500;

const catchAsyncErrors = require('./01_async');
const ErrorHandler = require('./02_errorhandler');
const errorMiddleware = require('./03_error');

const a = 12;

app.get('/', catchAsyncErrors(async (req, res, next) => {

    if (a !== 10) {
        return next(new ErrorHandler("My Custom Error!"));
    }
    else {
        res.send("A is 10");
    }
}));

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});