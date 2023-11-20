class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        //filtering
        const queryObj = { ...this.queryString };
        const excludedFields = ["page","limit","fields"];
        excludedFields.forEach((el) => delete queryObj[el]);


        //advanced filtering

        //$in is a mongoDB operator
        for (const [key, value] of Object.entries(queryObj)) {
            if (value.indexOf(",")) {
                queryObj[key] = { $in: value.split(",") };
            }
        }
        this.query = this.query.find(queryObj);
        return this;
    }

    sort() {
        if (this.queryString.sort) {
            this.query = this.query.sort(req.query.sort)
        }
        return this;
    }
}

module.exports = APIFeatures;
