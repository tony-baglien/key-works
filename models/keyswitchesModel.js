const mongoose = require("mongoose");

const keyswitchesSchema = mongoose.Schema({
    name: {
        type: String,
    },
    actuationForce: {
        type: Number,
        alias: "acutuationForce(g)",
    },
    actuationPoint: {
        type: Number,
        alias: "actuationPoint(mm)",
    },
    travelDistance: {
        type: Number,
        alias: "travelDistance(mm)",
    },
    tactility: {
        type: String,
    },
    sound: {
        type: String,
    },
    durability: {
        type: String,
    },
    switchType: {
        type: String,
    },
});

const Tour = mongoose.model("Keyswitches", keyswitchesSchema);

module.exports = Tour;
