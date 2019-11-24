
const express = require("express");

//local import
const AuthRouter = require("./auth");

const router = express.Router();

var usersRouter = require("./users");
var postingsRouter = require("./postings");



router.use("/auth", AuthRouter);
router.use("/users", usersRouter);
router.use("/postings", postingsRouter);

router.get("/", (req, res) => {
    if (req.user == undefined) {
        res.json({
            status: "OK",
            userAccount: req.user.gitHubUsername,
            userId: req.user.loginId

        });
    } else {
        res.redirect("/auth/github/login");
    }
});




router.get("/repos", (req, res) => {

});

module.exports = router;
