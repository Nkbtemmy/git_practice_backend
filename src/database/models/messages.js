import { string } from 'joi';
import mongoose from 'mongoose'
const messageSchema = mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    email: String,
    subject: String,
    dateOfBirth:{ type: Date, default: Date.now },
    message: String,
    years: Number
   // date: { type: Date, default: Date.now },
}, {
    timestamps: true
});

module.exports = mongoose.model('Messages', messageSchema);