class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        //filtering
        const queryObj = { ...this.queryString };
        const excludedFields = ["sort"];
        excludedFields.forEach((el) => delete queryObj[el]);
        this.query = this.query.find(queryObj);

        return this;
    }
    sort() {
        if (this.queryString.sort) {
            console.log(this.queryString.sort);
        }

        return this;
    }
}

module.exports = APIFeatures;
