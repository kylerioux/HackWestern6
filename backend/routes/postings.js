var express = require('express');
var postings = express.Router();
const mongoose = require("mongoose");
const {ObjectId} = require('mongodb');

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

postings.get('/:id', async (req, res) => {
    if(isAuthenticated(req, res)) {
        Posting.findOne({ _id: req.params.id }).then(post => {
            if(post != null) {
                res.send(post);
            } else {
                res.send("posting not found");
            }
        });
    }
});

postings.get('/match', async (req, res) => {
    if(isAuthenticated(req, res)) {
        res.send("not implemented");
    }
});

postings.post('/create/', async (req, res) => {
    if(isAuthenticated(req, res)) {
        var title = req.body.title;
        var description = req.body.description;
        var author = new ObjectId(req.body.author);

        User.findOne({ _id: req.params.id }).then(user => {
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
        res.send("success");
    }
  });

module.exports = postings;
