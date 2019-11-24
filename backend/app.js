var createError = require("http-errors");
var express = require("express");
var cors = require('cors');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const passport = require("passport");
var mongoose = require("mongoose");
var cookieSession = require("cookie-session");
//registering models
var user = require("./model/User");
var postings = require("./model/Posting");

var indexRouter = require("./routes/index");

var apiRouter = require("./routes/api");
var app = express();


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      name: "session",
      keys: ["ThisIsACookieKey2019"]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const auth = require("./authentication/GithubAuth");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.get(
  "/return/callback",
  passport.authenticate("github", { failureRedirect: "/api" }),
  (req, res) => {
    if (req.user != undefined){
      console.log("Login Successful!");
      res.redirect("http://127.0.0.1:3000/accountcreationq1");
    }else{
      res.redirect("/api/auth/github/login");
    }
     
  }
);
app.use(cors());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});



mongoose
    .connect(
        "mongodb+srv://admin:admin@cluster0-clona.mongodb.net/test?retryWrites=true&w=majority",
        { useUnifiedTopology: true, useNewUrlParser: true }
    )
    .then(
        () => {
            console.log("Connected to MongoDB");
        },
        () => {
            console.log("Failed to connect to MongoDB");
        }
    );

module.exports = app;
