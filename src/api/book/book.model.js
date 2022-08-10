const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true, unique: true},
    cover: { type: String, required: true},
    year: { type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('books', schema);
