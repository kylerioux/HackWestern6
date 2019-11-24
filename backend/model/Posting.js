const mongoose = require("mongoose");
const { Schema } = mongoose;

const postingSchema = new Schema({
    title: String, 
    description: String,
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    messages: [{
        author: { type: Schema.Types.ObjectId, ref: 'users' },
        content: String,
        timestamp : { type : Date, default: Date.now }
    }]
});

mongoose.model("postings", postingSchema);
