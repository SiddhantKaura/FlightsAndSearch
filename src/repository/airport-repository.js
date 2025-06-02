const {Airport} = require("../models/index");
const CrudRepository = require("./crud-repository");

class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
    // We can override the functions from base class here, if we wish to do so.
}

module.exports = AirportRepository;