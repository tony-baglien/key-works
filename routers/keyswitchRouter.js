const express = require("express");

let router = express.Router();

router.route("/").get((req, res) => {
    try {
        res.status(200).json({
            message: "This is the keyswitch API",
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
});

module.exports = router;
