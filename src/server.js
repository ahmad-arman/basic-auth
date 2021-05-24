'use strict';
const express = require('express');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
// const mongoose = require('mongoose');


const notFoundHndler = require('./middleware/404');
const errorHandler = require('./middleware/500');

const User = require('./auth/models/users-model');
const router = require('./auth/router');


const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',router);




module.exports = {
    server: app,
    start: (port) => {
      const PORT = port || 8080;
      app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    },
};

app.use('*', notFoundHndler);
app.use(errorHandler);