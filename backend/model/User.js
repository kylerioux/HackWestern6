const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    loginId: String,
    profilePictureUrl: String,
    gitHubUsername: String,
    gitHubUrl: String,
    personalWebsiteUrl: String,
    location: String,
    experience: {
        type: String,
        enum : ["BEGINNER", "INTERMEDIATE", "EXPERT"],
        default: "BEGINNER"
    },
    skills: [{
        type: String
    }],
    interests: [{
        type: String
    }],
});

mongoose.model("users", userSchema);
