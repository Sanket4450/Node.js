const User = require('../models/users');

const jwt = require('jsonwebtoken');

exports.isAuthenticatedUser = async (req, res, next) => {

    try {
        const { token } = req.body;

        if (!token) {
            res.status(403).send("Please Login to access this resource");
            return;
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {

            if (err) {
                res.status(403).send("Incorrect or Expired Token!");
                return;
            }

            req.user = await User.findById(user.id);

            next();
        });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}