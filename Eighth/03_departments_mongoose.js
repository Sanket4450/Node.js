const mongoose = require('mongoose');

const departmentsSchema = mongoose.Schema({
    name: String,
    head: String,
    managers: Number,
    employees: Number
});

module.exports = mongoose.model('departments', departmentsSchema);