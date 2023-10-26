const express = require("express");

//Models
const Keycaps = require("../models/keycapModel");
const APIFeatures = require("../utils/API_features");

let router = express.Router();

const getAllKeycaps = async (req, res) => {
    try {
        //filtering
        const features = new APIFeatures(Keycaps.find(), req.query)
            .filter()
            .sort();

        const keycaps = await features.query;


        res.status(200).json({
            status: "success",
            keycaps,
        });
    } catch (err) {
        console.log(err);
    }
};

const getKeycap = async (req, res) => {
    try {
        const id = req.params.id;
        const keycap = await Keycaps.findOne({ _id: id });

        res.status(200).json({
            status: "success",
            keycap,
        });
    } catch (err) {
        console.log(err);
    }
};

router.route("/").get(getAllKeycaps);
router.route("/:id").get(getKeycap);

module.exports = router;
