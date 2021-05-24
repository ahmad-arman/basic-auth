# basic-auth

# api-server
## About 
 A REST Express API, has various endpoints that perform sign in and sign up  

<hr>

## Author
 Ahmad Arman
<hr>

## Links
* [Submission Pull Request](https://github.com/ahmad-arman/basic-auth/pull/1)
* [Deployed App](https://ahmad-basic-auth.herokuapp.com/)
* [Error Report](https://github.com/ahmad-arman/basic-auth/actions)
<hr>

## Setup
1. `(.env)` file 
```
PORT = 3000
MONGOOSE_URI = mongodb://localhost:27017/people

 MONGOOSE_TEST_URI = mongodb+srv://ahmad:eng.ahmad123@cluster0.kilwd.mongodb.net/infUser?retryWrites=true&w=majority
```
2. Install the following dependencies
```
npm init -y 
npm i cors dotenv express morgan mongoose  "base-64" : 
    "bcrypt": 
    "dotenv": 
    "express": 
    "mongoose": 


mongod --dbpath=/Users/path/to/data/db
```
## Running the app 
1. clone the repo.
2. Enter the command `npm start`
3. Use endpoints :
   ## sign in 
  ### * `/api/v1/sign in`
<br>

- **Method** : post 
- **CRUD Operation** :  http://localhost:3000/api/v1/signin
- **Response Body**   : JSON
```
[
    {
    "user": {
        "_id": "60aae63fbcdc5d6877e732b8",
        "username": "aaaa",
        "password": "$2b$10$FiM6T4pbjS8DAYnz3JgDUeDVreQn5pZjgrIoTFqFwF0vg72dMXcBu",
        "__v": 0
    }
}
]
```
<br>

- **Method** : POST 
- **CRUD Operation** : http://localhost:3000/api/v1/signup
- **Response Body**   : JSON
```
    {
    "user": {
        "_id": "60aae63fbcdc5d6877e732b8",
        "username": "aaaa",
        "password": "$2b$10$FiM6T4pbjS8DAYnz3JgDUeDVreQn5pZjgrIoTFqFwF0vg72dMXcBu",
        "__v": 0
    }
}
```
<br>
<br>

4. Test .

* There's 2 test files . logger.test.js and server.test.js
* In terminal run :

```
npm test
```
<br><br><br>
<hr>
<br><br>

## UML Diagram
![image](./uml-password.png)