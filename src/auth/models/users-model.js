'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// schema
const userScehma = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// model
const Users = mongoose.model('User', userScehma);

userScehma.pre('save', async (next) => {
    // do stuff.
    try {
        let encryptedPass = await bcrypt.hash(this.password, 10)
        this.password = encryptedPass;
        console.log('pre save :', this.password)
       next();
    } catch (error) {
        console.error(error.massage)
    }
   
});

// userScehma.methods.authenticate = (password)=> {
// return bcrypt.compare(password, this.password)
// }; 

module.exports = Users ;
