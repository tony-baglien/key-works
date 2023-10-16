const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotEnv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
    console.log("connected to database!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
