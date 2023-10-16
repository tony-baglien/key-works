const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const Keycaps = require("../models/keycapModel");
const Keyswitches = require("../models/keyswitchesModel");
const FullBuilds = require("../models/fullBuildsModel");
const fs = require("fs");

//Connect to mongoDB
dotEnv.config({ path: "../config.env" });

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
    console.log("connected to database!");
});
C;
const keycaps = JSON.parse(
    fs.readFileSync(`${__dirname}/keycaps.json`, "utf-8")
);
const keyswitches = JSON.parse(
    fs.readFileSync(`${__dirname}/keyswitches.json`, "utf-8")
);
const fullBuilds = JSON.parse(
    fs.readFileSync(`${__dirname}/fullBuilds.json`, "utf-8")
);

const importKeycaps = async () => {
    try {
        await Keycaps.create(keycaps);
        await Keyswitches.create(keyswitches);
        await FullBuilds.create(fullBuilds);
        console.log("Info Uploaded!");
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

const deleteKeycaps = async () => {
    try {
        await Keycaps.deleteMany();
        await Keyswitches.deleteMany();
        await FullBuilds.deleteMany();
        console.log("Info Deleted");
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === "--import") {
    importKeycaps();
} else if (process.argv[2] === "--delete") {
    deleteKeycaps();
}
