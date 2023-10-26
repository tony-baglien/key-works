const mongoose = require("mongoose");

const keycapsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    material: {
        type: String,
    },
    profile: {
        type: String,
    },
    legend: {
        type: String,
    },
    compatability: {
        type: String,
    },
    design: {
        type: String,
    },
    texture: {
        type: String,
    },
    price: {
        type: Number,
        default: 100
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
});

const Tour = mongoose.model("Keycaps", keycapsSchema);

module.exports = Tour;
