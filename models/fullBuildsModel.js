const mongoose = require("mongoose");

const fullBuildSchema = mongoose.Schema({
    name: {
        type: String,
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
