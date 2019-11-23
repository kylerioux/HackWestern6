var express = require('express');
var users = express.Router();
const mongoose = require("mongoose");

const User = mongoose.model("users");

users.get('/:id', async (req, res) => {
  var id = req.params.id;
  let user = await User.find({_id: id}).exec();
  
  res.send(user);
});

users.post('/exp/:id/:experience', (req, res) => {
  User.findOne({ _id: req.params.id }).then(user => {
    user.experience = req.params.experience;
    user.save();
    res.send("success");
  });
})

users.post('/interest/:id/:interest', (req, res) => {
  User.findOne({ _id: req.params.id }).then(user => {
    var exists = user.interests.find((interest) => { 
      return interest == req.params.interest; 
    }); 
    if(!exists) {
      user.interests.push(req.params.interest);
      user.save();
      res.send("success");
    } else {
      res.send("interest already exists");
    }
  });
})

users.post('/groupsize/:id/:size', (req, res) => {
  User.findOne({ _id: req.params.id }).then(user => {
    var size = req.params.size;
    if(size != null && size > 0) {
      user.size = req.params.size;
      user.save();
      res.send("success");
    } else {
      res.send("size must be greater than 0");
    }
  });
})

module.exports = users;
