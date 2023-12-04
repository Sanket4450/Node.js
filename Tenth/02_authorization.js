require('dotenv').config({ path: __dirname + '/.env' });

const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

const port = 600;

app.use(express.json());

const courses = [
    { username: "sanket4450", title: ["JavaScript", "NodeJS", "MongoDB", "MERN"] },
    { username: "krish1718", title: ["JavaScript", "React-Native", "Git & GitHub"] },
    { username: "smit1582", title: ["Flutter", "Dart", "NodeJS", "Full Stack"] },
    { username: "antra6123", title: ["Data Science", "AI & ML", "Neural Networks"] }
];

app.get('/courses', authenticateToken, (req, res) => {

    let course = courses.filter(item => item.username === req.user.username);
    res.json(course);
});

app.post('/login', (req, res) => {

    // Authenticate User

    const user = { username: req.body.username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) res.status(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, output) => {
        if (err) res.status(403);

        req.user = output;
        next();
    });
}

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});