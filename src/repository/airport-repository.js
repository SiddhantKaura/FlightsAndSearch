const {Airport} = require("../models/index");

class AirportRepository {
    async createAirport({name, cityId}) {
        const airport = await Airport.findOrCreate({where: {name: name, cityId: cityId}});
        return airport;
    }
}

module.exports = AirportRepository;