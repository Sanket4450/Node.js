const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().lowercase().min(8).max(20).required()
});

const login1 = {
    // email: "sanket_talaviyagmail.com", // no email
    password: "sk123" // less than 8 chars
}

const login2 = {
    email: "sanket_talaviyagmail.com", // no @ sign
    password: "sanket123" // perfect password
}

const login3 = {
    email: "sanket_talaviya@gmail.com", // perfect email
    password: "Sanket123" // capital letter
}

const login4 = {
    email: "sanket_talaviya@gmail.com", // perfect email
    password: "sanket123" // perfect password
}

const result1 = loginSchema.validate(login1);
console.log(result1);

const result2 = loginSchema.validate(login2);
console.log(result2);

const result3 = loginSchema.validate(login3);
console.log(result3);

const result4 = loginSchema.validate(login4);
console.log(result4);