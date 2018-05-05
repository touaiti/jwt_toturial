const mongoose = require('mongoose');

const user = mongoose.Schema({
   email: {type: String, required: true},
   password: {type: String, required: true},
   first_name: {type:String, required: true},
   last_name: {type: String, required: true},
   role: {type: String, default: 'admin'}
});

const User =  module.exports = mongoose.model('User', user);