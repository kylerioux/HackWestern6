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
    preferredGroupSizeModifier: { type: Number, default: 100 },
    postingsSkipped: [{ type: Schema.Types.ObjectId, ref: 'Posting' }],
    postingsSkippedModifier: { type: Number, default: 100 },
    postingsInterested: [{ type: Schema.Types.ObjectId, ref: 'Posting' }],
    postingsInterestedModifier: { type: Number, default: 100 },

});

mongoose.model("users", userSchema);
