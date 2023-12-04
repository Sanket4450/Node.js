const express = require('express');
const app = express();
const port = 200;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const user = {
    fname: "Sanket",
    lname: "Talaviya",
    age: 17,
    city: "Surat",
    state: "Gujarat",
    country: "India"
}

app.get('/home', (req, res) => {
    res.render('home', {user});
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});