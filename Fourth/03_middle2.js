function myMiddleware2(req, res, next) {
    console.log('I am second custom middleware');
    next();  // passing to next middleware
}

module.exports = myMiddleware2;