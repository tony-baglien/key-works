const express = require("express");

//models
const FullKits = require("../models/fullBuildsModel");
const APIFeatures = require("../utils/API_features");

let router = express.Router();

const getAllBuildKits = async (req, res) => {
    try {
        //filtering
        const features = new APIFeatures(FullKits.find(), req.query)
            .filter()
            .sort();

        const fullkits = await features.query;

        res.status(200).json({
            status: "success",
            fullkits,
        });
    } catch (err) {
        console.log(err);
    }
};

const getBuildKit = async (req, res) => {
    try {
        const id = req.params.id;
        const fullKit = await FullKits.findOne({ _id: id });

        res.status(200).json({
            status: "success",
            fullKit,
        });
    } catch (err) {
        console.log(err);
    }
};

router.route("/").get(getAllBuildKits);
router.route("/:id").get(getBuildKit);

module.exports = router;
