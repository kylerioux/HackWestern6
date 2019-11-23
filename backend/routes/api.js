var cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const auth = require("../authentication/GithubAuth");
//local import
const AuthRouter = require("./auth");
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
            status: "session cookie set"
        });
    } else {
        res.json({
            status: "session cookie not set"
        });
    }
});

module.exports = router;