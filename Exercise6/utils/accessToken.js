require('dotenv').config({ path: "/Users/sankettalaviya/Desktop/Coding/NodeJS/Exercise6/.env" });

const jwt = require('jsonwebtoken');

function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

module.exports = generateAccessToken;