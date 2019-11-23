const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    loginId: String,
    profilePictureUrl: String,
    gitHubUsername: String,
    gitHubUrl: String,
    personalWebsiteUrl: String,
    location: String,
    accessToken:String,
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
    preferredGroupSize: Number,
    postingsSkipped: [{ type: Schema.Types.ObjectId, ref: 'Posting' }],
    postingsInterested: [{ type: Schema.Types.ObjectId, ref: 'Posting' }]
});

mongoose.model("users", userSchema);
