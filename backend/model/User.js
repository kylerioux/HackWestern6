const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    loginId: String
});

mongoose.model("users", userSchema);
