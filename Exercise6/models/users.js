const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, "Please Enter First Name"],
            maxLength: [20, "Name cannot exceed 20 characters"]
        },
        last_name: {
            type: String,
            maxLength: [20, "Name cannot exceed 20 characters"]
        },
        email: {
            type: String,
            required: [true, "Please Enter Your Email"],
            unique: true,
            validate: [validator.isEmail, "Please Enter a Valid Email"]
        },
        password: {
            type: String,
            required: [true, "Please Enter Your Password"]
        },
        token: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('user', userSchema);