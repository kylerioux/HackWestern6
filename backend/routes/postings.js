var express = require('express');
var postings = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Posting = mongoose.model("postings");

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
        var author = mongoose.Types.ObjectId(req.user._id);
        Posting.find({ $or: [{author: author},{"messages.author": author}] }).then(posts => {
            if(posts != null) {
                res.send(posts);
            } else {
                res.send("posts not found");
            }
        });
    }
});

postings.post('/create', async (req, res) => {
    if(isAuthenticated(req, res)) {
        var title = req.body.title;
        var description = req.body.description;
        var author = mongoose.Types.ObjectId(req.user._id);

        User.findOne({ _id: req.user._id }).then(user => {
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
  

postings.post('/comment', async (req, res) => {
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

postings.post('/skip', async (req, res) => {
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
        User.findOne({ _id: req.user._id })
        .populate('postingsSkipped)')
        .populate('postingsInterested')
        .then(user => {
            Posting.find()
            .populate('author')
            .then(posts => {
                var postScores = [];
                posts.forEach(post => {
                    var postScore = 0; //starts from 0, goes up
                    // If the posting hasnt previously been seen by the user, or has been made by the user
                    console.log("postingsSkipped: " + !user.postingsSkipped.some(e =>{ 
                        console.log(e._id.toString() + " : " + post._id.toString())
                        return e._id.toString() == post._id.toString()}));
                    console.log("postingsInterested: " + !user.postingsInterested.some(e => e._id == post._id));
                    console.log("author id: " + post.author._id + " user id: " + user._id);
                    console.log(post.author._id.toString() != user._id.toString());
                    if(!user.postingsSkipped.some(e => e._id.toString() == post._id.toString()) 
                        && !user.postingsInterested.some(e => e._id.toString() == post._id.toString())
                        && post.author._id.toString() != user._id.toString())
                    {
                        console.log("reached");
                        postScore += getCompatibilityScore(user, post.author);
                        //Track the final score of the post
                        postScores.push({
                            post,
                            postScore
                        })
                    }
                });
                // Sort posts from greatest to least and send in response
                var response = postScores.sort((a, b) => (a.postScore > b.postScore) ? 1 : -1);
                if(response.length == 0){
                  res.send("no postings found");
                } else {
                  res.send(response[0])
                }
            });
        });
    }
});

function getCompatibilityScore(searcher, potentialMatch) {
    var compatibilityScore = 0;

    // Interests - how many similar interests?
    compatibilityScore += searcher.interests.filter(function(i) {
        return potentialMatch.interests.indexOf(i) >= 0;
    }).length;
    
    // Skills - similar skills?
    compatibilityScore += searcher.skills.filter(function(i) {
        return potentialMatch.skills.indexOf(i) >= 0;
    }).length;

    // Group Size
    compatibilityScore -= Math.abs(searcher.preferredGroupSize - potentialMatch.preferredGroupSize);

    // Experience level - weighted similarity
    if(searcher.experience == "BEGINNER") compatibilityScore += searcher.preferredGroupSizeModifier*(potentialMatch.experience == "BEGINNER" ? 20 : potentialMatch.experience = "INTERMEDIATE" ? 10 : 3);
    else if(searcher.experience == "INTERMEDIATE") compatibilityScore += searcher.preferredGroupSizeModifier*(potentialMatch.experience == "INTERMEDIATE" ? 20 : 10);
    else if(searcher.experience == "EXPERT") compatibilityScore += searcher.preferredGroupSizeModifier*(potentialMatch.experience == "EXPERT" ? 20 : potentialMatch.experience = "INTERMEDIATE" ? 10 : 3);

    return compatibilityScore;
}

module.exports = postings;
