const mongoose = require("mongoose");

const fullBuildSchema = mongoose.Schema({
    name: {
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
    },
    keySwitches: [
        {
            name: String,
            switchType: String,
        },
        {
            name: String,
            switchType: String,
        },
        {
            name: String,
            switchType: String,
        },
    ],
    keyCaps: [
        {
            name: String,
            material: String,
        },
    ],
    case: String,
    layout: String,
    backlighting: Boolean,
});

const Tour = mongoose.model("FullBuild", fullBuildSchema);

module.exports = Tour;
