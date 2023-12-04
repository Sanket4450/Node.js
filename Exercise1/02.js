const express = require('express');
const app = express();
const port = 1002;

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

app.post('/cars', (req, res) => {
    const car = {
        id: cars.length + 1,
        name: req.body.name,
        quantity: req.body.quantity,
        color: req.body.color
    }
    cars.push(car);
    res.send(car);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
    setInterval(() => {
        let date = new Date();
        console.log(date.getHours(), ":", date.getMinutes(), ":", date.getSeconds());
    }, 10000);
});