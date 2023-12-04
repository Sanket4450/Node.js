const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Book Name"],
        maxLength: [40, "Name cannot exceed 40 characters"]
    },
    author: {
        type: String,
        maxLength: [30, "Name cannot exceed 30 characters"],
        default: null
    },
    description: {
        type: String,
        maxLength: [150, "Description cannot exceed 150 characters"],
        default: null
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model('book', bookSchema);