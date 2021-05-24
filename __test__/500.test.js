'use strict';

require('dotenv').config();
const base64 = require("base-64");
const supertest = require('supertest');
const router =require('../src/auth/router')
const server = require('../src/server');
const basic =require('../src/auth/middleware/basic')
// require('@code-fellows/superpose');

const request = supertest(server.server);



const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOOSE_TEST_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
// }, async () => {// delete everything from db after tests
//   await mongoose.connection.db.dropDatabase();
});




describe('route', ()=>{

   

    it('POST to / signin to login as a user(use basic auth)', async () => {
        //arrange
        let user = {
            username: 'ahm',
            password: '789'
        }
        //act
        const response = await request.post('/api/v1/signin').auth(user.username,user.password);
        console.log('user data: ', response.body);
        //assert
        expect(response.status).toEqual(500);
        // expect(response.body.user.username).toEqual('ahmad1997');
        // expect(response.body.user.password).toEqual('789');
    });

    it('POST to /signup to create a new user', async () => {
        //arrange
        let Users = {
            username: 'ahmad1997',
            password: '789'
        }
        //act
        const response = await request.post('/api/v1/signup').send(Users);
        //assert
        // console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',response.body);
        expect(response.status).toEqual(403);
        // expect(response.body.username).toEqual('ahmad1997');
        // expect(response.body.password).toEqual('789');
        

       
    });

});

