var express = require('express');
var users = express.Router();
const mongoose = require("mongoose");

const User = mongoose.model("users");

function isAuthenticated(req, res) {
  if(req.user == undefined) {
    res.send("Unauthenticated access");
    return false;
  } else {
    return true;
  }
}

users.get('/', async (req, res) => {
  if(isAuthenticated(req, res)) {
    var id = req.user._id;
    let user = await User.find({_id: id}).exec();
    
    res.send(user);
  }
});

users.post('/exp', (req, res) => {
  if(isAuthenticated(req, res)) {
    User.findOne({ _id: req.user._id }).then(user => {
      user.experience = req.body.experience;
      user.save();
      res.send("success");
    });
  }
})

users.post('/interest', (req, res) => {
  if(isAuthenticated(req, res)) {
    User.findOne({ _id: req.user._id }).then(user => {
      var exists = user.interests.find(interest => {
        return interest == req.body.interest; 
      }); 
      if(!exists) {
        user.interests.push(req.body.interest);
        user.save();
        res.send("success");
      } else {
        res.send("interest already exists");
      }
    });
  }
})

users.post('/group-size', (req, res) => {
  if(isAuthenticated(req, res)) {
    User.findOne({ _id: req.user._id }).then(user => {
      var size = req.body.size;
      if(size != null && size > 0) {
        user.size = size;
        user.save();
        res.send("success");
      } else {
        res.send("size must be greater than 0");
      }
    });
  }
})

module.exports = users;
