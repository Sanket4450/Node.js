const express = require('express');
const app = express();
const port = 1003;

app.use(express.json());

const cars = [
    { id: 1, name: "Bugatti", quantity: 20, color: ["Blue", "White", "Red Metacllic"] },
    { id: 2, name: "Ferrari", quantity: 50, color: ["Rosso Corsa", "Nero", "Grigio Silverstone"] },
    { id: 3, name: "Lamborghini", quantity: 70, color: ["Arancio Atlas", "Grigio Adamas", "Blu Nethuns"] },
    { id: 4, name: "Mercedes", quantity: 120, color: ["Obsidian Black", "Cirrus Silver", "Emerald Green"] },
    { id: 5, name: "Volvo", quantity: 150, color: ["Black", "Ice White", "Crystal White Metallic"] },
    { id: 6, name: "Rolls Royce", quantity: 10, color: ["Belladonna Purple", "Dark Emerald", "Arctic White"] },
];

app.get('/', (req, res) => {
    res.send("Welcome to SK Cars");
});

app.get('/cars', (req, res) => {
    res.send(cars);
});

app.put('/cars', (req, res) => {

    let car;

    if (req.query.id && req.query.name) {
        car = cars.find(value => value.id === parseInt(req.query.id) && value.name === req.query.name);

        if (car) {
            car.name = req.body.name;
            car.quantity = req.body.quantity;
            car.color = req.body.color;
        }
        else {
            res.status(404).send("Error! Car ID and Car Name doesn't match!");
        }
    }
    else if (req.query.id) {
        car = cars.find(value => value.id === parseInt(req.query.id));

        if (car) {
            car.name = req.body.name;
            car.quantity = req.body.quantity;
            car.color = req.body.color;
        }
        else {
            res.status(404).send("Error! Car object doesn't exist!");
        }
    }
    else if (req.query.name) {
        car = cars.find(value => value.name === req.query.name);

        if (car) {
            car.name = req.body.name;
            car.quantity = req.body.quantity;
            car.color = req.body.color;
        }
        else {
            res.status(404).send("Error! Car Name doesn't exist!");
        }
    }

    res.send(car);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
    setInterval(() => {
        let date = new Date();
        console.log(date.getHours(), ":", date.getMinutes(), ":", date.getSeconds());
    }, 10000);
});