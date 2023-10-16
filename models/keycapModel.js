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
});

const Tour = mongoose.model("Keycaps", keycapsSchema);

module.exports = Tour;
