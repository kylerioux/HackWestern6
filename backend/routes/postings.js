var express = require('express');
var postings = express.Router();
const mongoose = require("mongoose");
const Posting = mongoose.model("postings");
const User = mongoose.model("users");

function isAuthenticated(req, res) {
    if(req.user == undefined) {
      res.send("Unauthenticated access");
      return false;
    } else {
      return true;
    }
  }

postings.get('/', async (req, res) => {
    if(isAuthenticated(req, res)) {
        Posting.findOne({ _id: req.body.id }).then(post => {
            if(post != null) {
                res.send(post);
            } else {
                res.send("posting not found");
            }
        });
    }
});

postings.post('/create/', async (req, res) => {
    if(isAuthenticated(req, res)) {
        var title = req.body.title;
        var description = req.body.description;
        var author = mongoose.Types.ObjectId(req.body.author);

        User.findOne({ _id: req.body.author }).then(user => {
            if(user != null) {
                new Posting({ 
                    title: title,
                    description: description,
                    author: author,
                    messages: [],
                }).save().then(posting => {
                    if(posting != null) res.send("success");
                    else res.send("failed to insert posting");
                });
            } else {
                res.send("author user not found")
            }
        });
    }
  });

postings.post('/comment/', async (req, res) => {
    if(isAuthenticated(req, res)) {
        Posting.findOne({ _id: req.body.id }).then(post => {
            if(post != null) {
                post.messages.push({
                    author: mongoose.Types.ObjectId(req.body.author),
                    content: req.body.content,
                    timestamp : new Date()
                });
                post.save().then(post => {
                    User.findOne({ _id: req.user._id }).then(user => {
                        user.postingsInterested.push(mongoose.Types.ObjectId(req.body.id));
                        user.save();
                    });
                });
                res.send("success");
            } else {
                res.send("posting not found");
            }
        });
    }
});

postings.post('/decline/', async (req, res) => {
    if(isAuthenticated(req, res)) {
        User.findOne({ _id: req.user._id }).then(user => {
            if(user != null) {
              user.postingsSkipped.push(mongoose.Types.ObjectId(req.body.id));
              user.save();
              res.send("success");
            } else {
              res.send("user not found");
            }
        });
    }
  });

postings.get('/match', async (req, res) => {
    if(isAuthenticated(req, res)) {
        res.send("not implemented");
    }
});

module.exports = postings;
