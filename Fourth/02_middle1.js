function myMiddleware1(req, res, next) {
    console.log('I am first custom middleware');
    next();  // passing to next middleware
}

module.exports = myMiddleware1;