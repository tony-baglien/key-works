const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotEnv.config();

let db = process.env.DATABASE;
let dbpw = process.env.DATABASE_PASSWORD;

const DB = db.replace("<PASSWORD>", dbpw);

mongoose
  .connect(DB)
  .then((con) => {
    console.log("connected to database!");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
