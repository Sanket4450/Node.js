const express = require('express');
const app = express();
const port = 10000;

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

app.get('/courses/:id', (req, res) => {
    console.log(req.params); // prints id object everytime client requests
    let course = courses.find(value => value.id === parseInt(req.params.id));
    // if find method can't find such id, it will return undefined

    if (!course) {  // if course is undefined then...
        res.status(404);
        res.send("Error! Course doesn't exist");
    }
    res.send(course);
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});