const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    content: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('blogs', blogSchema);