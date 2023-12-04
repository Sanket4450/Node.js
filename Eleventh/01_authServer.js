require('dotenv').config({ path: __dirname + '/.env' });

const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

const port = 800;

app.use(express.json());

let refreshTokens = [];

app.post('/token', (req, res) => {

    const refreshToken = req.body.token;

    if (!refreshToken) res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) res.sendStatus(403);

        const accessToken = generateAccessToken({ username: user.username });

        res.send({ accessToken: accessToken });
    });
});

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
});

app.post('/login', (req, res) => {

    const user = { username: req.body.username };

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

    refreshTokens.push(refreshToken);

    res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
}

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});