const mongoose = require('mongoose');

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = mongoose.Schema({
    name: { type: String, trim: true, required: 'Name is required', minLength: 3, maxLength: 55 },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String, required: 'Password is required', minLength: 6 },
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('User',userSchema);