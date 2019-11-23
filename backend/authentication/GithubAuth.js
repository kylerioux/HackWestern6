var GoogleStrategy = require("passport-github").Strategy;

const passport = require("passport");
const mongoose = require("mongoose");
const axios = require('axios');
var GitHubStrategy = require("passport-github").Strategy;

const User = mongoose.model("users");
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

var  getAllUserRepoLanguagesInOrder = async (accessToken)=>{
  var reposResponose = await axios.get('https://api.github.com/user/repos', { params:{}, headers: { Authorization: 'Bearer '.concat(accessToken), type: "ALL"}}  )

  var languageStats = {}
  var allLanugages = await Promise.all( reposResponose.data.map( async (x)=>{
    var p = await axios.get(x.languages_url, { params:{}, headers: { Authorization: 'Bearer '.concat(accessToken)}}  )
  
    return p.data;
  }));

  for (var repo of allLanugages){
    for (let key in repo){
        languageStats[key] = languageStats[key]+ repo[key] || repo[key]
    }
  }

  var sortable = [];
  for (var language in languageStats) {
      sortable.push(language);
  }

  sortable.sort(function(a, b) {
      return b[1] - a[1];
  });
  sortable = sortable.slice(0,11);
  return sortable;

}

passport.use(
    new GitHubStrategy(
        {
            clientID: "807d0b307249526da86c",
            clientSecret: "0916408634b0ff342248f5e054604cc0bd7ae093",
            callbackURL: "http://206.189.64.155:3000/api/auth/github/callback"
        },
         async (accessToken, refreshToken, profile, done) => {
            var p =  await getAllUserRepoLanguagesInOrder(accessToken);
            User.findOne({ loginId: profile.id }).then(user => {
                if (user) {
                    user.accessToken = accessToken;
                    if (user.skills == [] || user.skills.length == 0){
                      user.skills = p;
                    }
                    user.save().then(()=>{
                      return done(null,);
                    })
                 
                } else {
       
                    new User({ 
                        loginId: profile.id,
                        profilePictureUrl: profile.photos[0] != null ? profile.photos[0].value : null,
                        gitHubUserName: profile.displayName,
                        gitHubUrl: profile.profileUrl,
                        personalWebsiteUrl: profile._json.blog != null ? profile._json.blog : null,
                        location: profile._json.location != null ? profile._json.location : null,
                        skills:p,
                        interests: [],
                        preferredGroupSize: null,
                        accessToken: accessToken
                    }).save().then(user => {
                      return done(null, user);
                    });
                }
            });
        }
    )
);
