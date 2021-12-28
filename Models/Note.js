const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true,
        default: 'general'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Note = mongoose.model('notes', NotesSchema);
module.exports = Note;
