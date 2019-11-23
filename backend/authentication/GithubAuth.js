var GoogleStrategy = require("passport-github").Strategy;

const passport = require("passport");
const mongoose = require("mongoose");

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
passport.use(
    new GitHubStrategy(
        {
            clientID: "807d0b307249526da86c",
            clientSecret: "0916408634b0ff342248f5e054604cc0bd7ae093",
            callbackURL: "http://127.0.0.1:3000/api/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            User.findOne({ loginId: profile.id }).then(user => {
                if (user) {
                    return done(null, user);
                } else {
                    new User({ 
                        loginId: profile.id,
                        profilePictureUrl: profile.photos[0] != null ? profile.photos[0].value : null,
                        gitHubUserName: profile.displayName,
                        gitHubUrl: profile.profileUrl,
                        personalWebsiteUrl: profile._json.blog != null ? profile._json.blog : null,
                        location: profile._json.location != null ? profile._json.location : null,
                        skills: [null],
                        interests: [null],
                    }).save().then(user => {
                        return done(null, user);
                    });
                }
            });
        }
    )
);
