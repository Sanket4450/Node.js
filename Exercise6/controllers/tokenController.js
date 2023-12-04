const jwt = require('jsonwebtoken');

const generateAccessToken = require('../utils/accessToken');
const createApiResponse = require('../utils/ApiResponse');

exports.renewAccessToken = async (req, res) => {

    const refreshToken = req.body.token;

    if (!refreshToken) {
        res.status(401).send("Token not found!");
        return;
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {

        if (err) {
            res.status(403).send("Invalid Token!");
            return;
        }

        const accessToken = generateAccessToken({ id: user.id, email: user.email });

        const response = createApiResponse(true, '', {accessToken, refreshToken});

        res.status(201).cookie('token', accessToken, { httpOnly: true }).res.json(response);
    });
}