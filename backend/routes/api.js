var cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const auth = require("../authentication/GithubAuth");
//local import
const AuthRouter = require("./auth");
const axios = require('axios');
const router = express.Router();

router.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        name: "session",
        keys: ["ThisIsACookieKey2019"]
    })
);

router.use(passport.initialize());
router.use(passport.session());

router.use("/auth", AuthRouter);

router.get("/", (req, res) => {
    if (req.user) {
        res.json({
            status: "session cookie set",
            token:req.user.accessToken
        });
    } else {
        res.json({
            status: "session cookie not set"
        });
    }
});


router.get("/repos", (req, res) => {
  axios.get('https://api.github.com/user/repos', { params:{}, headers: { Authorization: 'Bearer '.concat(req.user.accessToken), type: "ALL"}}  )
  .then(async (response) => {
    // handle success
    //res.json( response.data);
    //https://api.github.com/repos/atavako5/se3316-atavako5-lab5-V3/languages
//     axios.get("https://api.github.com/repos/atavako5/se3316-atavako5-lab5-V3/languages", { params:{}, headers: { Authorization: 'Bearer '.concat(req.user.accessToken)}}  ).then((data)=>{
// res.json(data.data);
      
    // })
    var languageStats = {}
    var allLanugages = await Promise.all( response.data.map( async (x)=>{
      var p = await axios.get(x.languages_url, { params:{}, headers: { Authorization: 'Bearer '.concat(req.user.accessToken)}}  )
     
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
      res.json( sortable);
  })
});

module.exports = router;
