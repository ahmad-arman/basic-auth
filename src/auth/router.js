'use strict';
const User =require('../auth/models/users-model')
const express = require('express');
const bcrypt = require('bcrypt');
const router=express.Router();
const basic =require('../auth/middleware/basic')



router.post('/signin', basic,singIN);
router.post('/signup',signUp);


async function signUp(req,res){
 

    try {
        const { username, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hash });
        const record = await user.save();
        res.status(201).json(record);
        
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
}

async  function singIN (req,res) {

    try {
        // const user = await Users.findOne({ username: req.user.username });
        // const valid = await bcrypt.compare(req.user.password, req.user.password);
        if (req.user) {
          res.status(200).json({
             user :req.user
            });
        }
        else {
          throw new Error('Invalid User');
        }
      } catch (error) { res.status(403).send('Invalid Login'); }


    // try {
    //     // Basic base64-encoded-strign
    //     // console.log('authorization headers value ', req.headers.authorization);
    //     // const encoded = req.headers.authorization.split(' ')[1];
    //     // console.log('encoded', encoded);
    //     // const decoded = base64.decode(encoded);
    //     // console.log('decoded', decoded);

    //     // const [username, password] = decoded.split(':');
    //     // const user = await User.findOne({ username });
    //     // const isValid = await bcrypt.compare(password, user.password);

    //     if (isValid) {
    //        res.status(200).json(req.user);
    //     } else {
    //         res.status(401).json({ error: 'Invalid username or password' });
    //     }
    // } catch (error) {
    //     res.status(401).json({ error: error.message });
    // }
}




module.exports = router;