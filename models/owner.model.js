const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    jamRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JamRoom'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;