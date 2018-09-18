const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

/**
 * Add a new user
 */
router.post('/register/', function (req, res, next) {

  //Check if the email is already present in the db
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    nick: req.body.nick
  });

  //Persist the user on the db
  user.save(res)
    .then(response => {
        //TODO handle better the result
        console.log(response);
        res.status(201);
      }
    )
    .catch(error => {
      //TODO handle better the errors
      console.error(error);
    });


});

module.exports = router;
