const express = require("express");
//ROUTERS
const keycapRouter = require("./routers/keycapRouter");
const keyswitchRouter = require("./routers/keyswitchRouter");
const fullbuildRouter = require("./routers/fullbuildRouter");

const app = express();

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);
    next();
});

//API ROUTES
app.use("/api/v1/keycaps", keycapRouter);
app.use("/api/v1/keyswitches", keyswitchRouter);
app.use("/api/v1/fullbuilds", fullbuildRouter);

module.exports = app;
