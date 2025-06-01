const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.AirportRepository = new AirportRepository();
  }
  async createAirport(name, cityId) {
    try {
      await this.AirportRepository.createAirport({ name, cityId });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AirportService;
