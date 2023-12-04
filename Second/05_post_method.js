const express = require('express');
const app = express();
const port = 20000;

app.use(express.json());

const courses = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'C++' },
    { id: 5, name: 'HTML/CSS' },
];

app.get('/', (req, res) => {
    res.send("Welcome to this website");
});

// get method is used for reading data

app.get('/courses', (req, res) => {
    res.send(courses);  // sending the whole array of objects
});

// post method is used for creating data

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.get('/courses/:id', (req, res) => {
    console.log(req.params);
    let course = courses.find(value => value.id === parseInt(req.params.id));

    if (!course) {
        res.status(404);
        res.send("Error! Course doesn't exist");
    }
    res.send(course);
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});