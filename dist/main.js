var $bdTtH$dotenv = require("dotenv");
var $bdTtH$mongoose = require("mongoose");
var $bdTtH$express = require("express");
var $bdTtH$cors = require("cors");



var $84a264530b3fb4fb$exports = {};


var $a7ba91d74de65be3$exports = {};

var $1a4022318fbf89ac$exports = {};

const $1a4022318fbf89ac$var$keycapsSchema = new $bdTtH$mongoose.Schema({
    name: {
        type: String
    },
    material: {
        type: String
    },
    profile: {
        type: String
    },
    legend: {
        type: String
    },
    compatability: {
        type: String
    },
    design: {
        type: String
    },
    texture: {
        type: String
    }
});
const $1a4022318fbf89ac$var$Tour = $bdTtH$mongoose.model("Keycaps", $1a4022318fbf89ac$var$keycapsSchema);
$1a4022318fbf89ac$exports = $1a4022318fbf89ac$var$Tour;


var $1663c8bfb6a7d7c6$exports = {};
class $1663c8bfb6a7d7c6$var$APIFeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filter() {
        //filtering
        const queryObj = {
            ...this.queryString
        };
        const excludedFields = [
            "sort"
        ];
        excludedFields.forEach((el)=>delete queryObj[el]);
        this.query = this.query.find(queryObj);
        return this;
    }
    sort() {
        if (this.queryString.sort) console.log(this.queryString.sort);
        return this;
    }
}
$1663c8bfb6a7d7c6$exports = $1663c8bfb6a7d7c6$var$APIFeatures;


let $a7ba91d74de65be3$var$router = $bdTtH$express.Router();
const $a7ba91d74de65be3$var$getAllKeycaps = async (req, res)=>{
    try {
        //filtering
        const features = new $1663c8bfb6a7d7c6$exports($1a4022318fbf89ac$exports.find(), req.query).filter().sort();
        const keycaps = await features.query;
        res.status(200).json({
            status: "success",
            keycaps: keycaps
        });
    } catch (err) {
        console.log(err);
    }
};
const $a7ba91d74de65be3$var$getKeycap = async (req, res)=>{
    try {
        const id = req.params.id;
        const keycap = await $1a4022318fbf89ac$exports.findOne({
            _id: id
        });
        res.status(200).json({
            status: "success",
            keycap: keycap
        });
    } catch (err) {
        console.log(err);
    }
};
$a7ba91d74de65be3$var$router.route("/").get($a7ba91d74de65be3$var$getAllKeycaps);
$a7ba91d74de65be3$var$router.route("/:id").get($a7ba91d74de65be3$var$getKeycap);
$a7ba91d74de65be3$exports = $a7ba91d74de65be3$var$router;


var $20522c158ca49668$exports = {};

var $ca542f5d2e70e274$exports = {};

const $ca542f5d2e70e274$var$keyswitchesSchema = $bdTtH$mongoose.Schema({
    name: {
        type: String
    },
    actuationForce: {
        type: Number,
        alias: "acutuationForce(g)"
    },
    actuationPoint: {
        type: Number,
        alias: "actuationPoint(mm)"
    },
    travelDistance: {
        type: Number,
        alias: "travelDistance(mm)"
    },
    tactility: {
        type: String
    },
    sound: {
        type: String
    },
    durability: {
        type: String
    },
    switchType: {
        type: String
    }
});
const $ca542f5d2e70e274$var$Tour = $bdTtH$mongoose.model("Keyswitches", $ca542f5d2e70e274$var$keyswitchesSchema);
$ca542f5d2e70e274$exports = $ca542f5d2e70e274$var$Tour;



let $20522c158ca49668$var$router = $bdTtH$express.Router();
const $20522c158ca49668$var$getAllKeySwitches = async (req, res)=>{
    try {
        //filtering
        const features = new $1663c8bfb6a7d7c6$exports($ca542f5d2e70e274$exports.find(), req.query).filter().sort();
        const keySwitches = await features.query;
        res.status(200).json({
            status: "success",
            keySwitches: keySwitches
        });
    } catch (err) {
        console.log(err);
    }
};
const $20522c158ca49668$var$getkeySwitch = async (req, res)=>{
    try {
        const id = req.params.id;
        const keySwitch = await $ca542f5d2e70e274$exports.findOne({
            _id: id
        });
        res.status(200).json({
            status: "success",
            keySwitch: keySwitch
        });
    } catch (err) {
        console.log(err);
    }
};
$20522c158ca49668$var$router.route("/").get($20522c158ca49668$var$getAllKeySwitches);
$20522c158ca49668$var$router.route("/:id").get($20522c158ca49668$var$getkeySwitch);
$20522c158ca49668$exports = $20522c158ca49668$var$router;


var $9bcceecfed209758$exports = {};

var $108e5f2022792aa7$exports = {};

const $108e5f2022792aa7$var$fullBuildSchema = $bdTtH$mongoose.Schema({
    name: {
        type: String
    },
    keySwitches: [
        {
            name: String,
            switchType: String
        },
        {
            name: String,
            switchType: String
        },
        {
            name: String,
            switchType: String
        }
    ],
    keyCaps: [
        {
            name: String,
            material: String
        }
    ],
    case: String,
    layout: String,
    backlighting: Boolean
});
const $108e5f2022792aa7$var$Tour = $bdTtH$mongoose.model("FullBuild", $108e5f2022792aa7$var$fullBuildSchema);
$108e5f2022792aa7$exports = $108e5f2022792aa7$var$Tour;



let $9bcceecfed209758$var$router = $bdTtH$express.Router();
const $9bcceecfed209758$var$getAllBuildKits = async (req, res)=>{
    try {
        //filtering
        const features = new $1663c8bfb6a7d7c6$exports($108e5f2022792aa7$exports.find(), req.query).filter().sort();
        const fullkits = await features.query;
        res.status(200).json({
            status: "success",
            fullkits: fullkits
        });
    } catch (err) {
        console.log(err);
    }
};
const $9bcceecfed209758$var$getBuildKit = async (req, res)=>{
    try {
        const id = req.params.id;
        const fullKit = await $108e5f2022792aa7$exports.findOne({
            _id: id
        });
        res.status(200).json({
            status: "success",
            fullKit: fullKit
        });
    } catch (err) {
        console.log(err);
    }
};
$9bcceecfed209758$var$router.route("/").get($9bcceecfed209758$var$getAllBuildKits);
$9bcceecfed209758$var$router.route("/:id").get($9bcceecfed209758$var$getBuildKit);
$9bcceecfed209758$exports = $9bcceecfed209758$var$router;


const $84a264530b3fb4fb$var$app = $bdTtH$express();
$84a264530b3fb4fb$var$app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);
    next();
});
$84a264530b3fb4fb$var$app.use($bdTtH$cors({
    origin: "*"
}));
//API ROUTES
$84a264530b3fb4fb$var$app.use("/api/v1/keycaps", $a7ba91d74de65be3$exports);
$84a264530b3fb4fb$var$app.use("/api/v1/keyswitches", $20522c158ca49668$exports);
$84a264530b3fb4fb$var$app.use("/api/v1/fullbuilds", $9bcceecfed209758$exports);
$84a264530b3fb4fb$exports = $84a264530b3fb4fb$var$app;


$bdTtH$dotenv.config({
    path: "./config.env"
});
const $2685e5b20c9f29f6$var$DB = undefined.replace("<PASSWORD>", undefined);
$bdTtH$mongoose.connect($2685e5b20c9f29f6$var$DB).then((con)=>{
    console.log("connected to database!");
});
const $2685e5b20c9f29f6$var$port = 3000;
$84a264530b3fb4fb$exports.listen($2685e5b20c9f29f6$var$port, ()=>{
    console.log(`Listening on port ${$2685e5b20c9f29f6$var$port}`);
});


//# sourceMappingURL=main.js.map
