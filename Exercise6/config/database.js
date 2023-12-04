require('dotenv').config({ path: "/Users/sankettalaviya/Desktop/Coding/NodeJS/Exercise6/.env" });

const mongoose = require('mongoose');

function connectDatabase() {
    mongoose.connect(process.env.DB_URI)
        .then(data => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        });
}

module.exports = connectDatabase;