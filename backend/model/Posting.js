const mongoose = require("mongoose");
const { Schema } = mongoose;

const postingSchema = new Schema({
    title: String, 
    description: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    messages: [{
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        content: String,
        timestamp : { type : Date, default: Date.now }
    }]
});

mongoose.model("postings", postingSchema);
