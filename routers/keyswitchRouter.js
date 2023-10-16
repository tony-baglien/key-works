const express = require("express");

//models
const KeySwitches = require("../models/keyswitchesModel");
const APIFeatures = require("../utils/API_features");

let router = express.Router();

const getAllKeySwitches = async (req, res) => {
    try {
        //filtering
        const features = new APIFeatures(KeySwitches.find(), req.query)
            .filter()
            .sort();

        const keySwitches = await features.query;

        res.status(200).json({
            status: "success",
            keySwitches,
        });
    } catch (err) {
        console.log(err);
    }
};

const getkeySwitch = async (req, res) => {
    try {
        const id = req.params.id;
        const keySwitch = await KeySwitches.findOne({ _id: id });

        res.status(200).json({
            status: "success",
            keySwitch,
        });
    } catch (err) {
        console.log(err);
    }
};

router.route("/").get(getAllKeySwitches);
router.route("/:id").get(getkeySwitch);

module.exports = router;
