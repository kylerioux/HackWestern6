const mongoose = require("mongoose");
const { Schema } = mongoose;

const postingSchema = new Schema({
    title: String, 
    description: String,
    author: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

mongoose.model("users", postingSchema);
