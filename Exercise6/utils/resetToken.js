require('dotenv').config({ path: "/Users/sankettalaviya/Desktop/Coding/NodeJS/Exercise6/.env" });

const jwt = require('jsonwebtoken');

function generateResetToken(payload) {
    return jwt.sign(payload, process.env.RESET_TOKEN_SECRET, { expiresIn: '20m' });
}

module.exports = generateResetToken;