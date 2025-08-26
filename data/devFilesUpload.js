const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const Keycaps = require("../models/keycapModel");
const Keyswitches = require("../models/keyswitchesModel");
const FullBuilds = require("../models/fullBuildsModel");
const fs = require("fs");

//Connect to mongoDB
dotEnv.config({ path: path.join(__dirname, "../.env") });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB)
  .then((con) => {
    console.log("connected to database!");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

let keycaps, keyswitches, fullBuilds;
try {
  keycaps = JSON.parse(fs.readFileSync(`${__dirname}/keycaps.json`, "utf-8"));
  keyswitches = JSON.parse(
    fs.readFileSync(`${__dirname}/keyswitches.json`, "utf-8"),
  );
  fullBuilds = JSON.parse(
    fs.readFileSync(`${__dirname}/fullBuilds.json`, "utf-8"),
  );
} catch (err) {
  console.log("Error reading files:", err);
  process.exit(1);
}

const importKeycaps = async () => {
  try {
    await Keycaps.create(keycaps);
    await Keyswitches.create(keyswitches);
    await FullBuilds.create(fullBuilds);
    console.log("Info Uploaded!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  await mongoose.connection.close();
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
