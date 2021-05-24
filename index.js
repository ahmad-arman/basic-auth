'use strict';
const server = require('./src/server')
const mongoose = require('mongoose');
require('dotenv').config();





mongoose
    .connect(process.env.MONGOOSE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        
        server.start(process.env.PORT);
       
    })
    .catch((e) => console.error('CONNECTION ISSUE', e.message));
