const express = require('express');
const app = express();
const port = 40000;

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
    res.send(courses);
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

// put method is used for updating data

app.put('/courses/:id', (req, res) => {
    let course = courses.find(value => value.id === parseInt(req.params.id));

    if (!course) {
        res.status(404);
        res.send("Error! Course doesn't exist");
    }
    course.name = req.body.name;
    res.send(course);
});

// delete method is used for deleting data

app.delete('/courses/:id', (req, res) => {
    let course = courses.find(value => value.id === parseInt(req.params.id));

    if (!course) {
        res.status(404);
        res.send("Error! Course doesn't exist");
    }
    const index = courses.indexOf(course); // storing index of the specific object
    courses.splice(index, 1);  // splicing object from courses array
    res.send(course);  // sending the object deleted from courses array
});

// another way to use delete method

/* app.delete('/courses/:id', (req, res) => {
    let updatedCourses = courses.filter(value => value.id !== req.params.id);

    courses = updatedCourses;
    res.send(courses);
}); */

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