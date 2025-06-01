const { FlightRepository, AirplaneRepository } = require("../repository");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!data.airplaneId) {
        throw "Insufficient data";
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      throw error;
    }
  }

  async createBulkFlights(data) {
    try {
      // If any of the flight detail lacks airplaneId, fail the request.
      if (data.some((flight) => !flight.airplaneId)) {
        throw "Insufficient data";
      }
      const airplaneIds = data.map((flight) => flight.airplaneId);
      console.log(airplaneIds, " hi");
      const airplanes = await this.airplaneRepository.getAirplanes(airplaneIds);
      const airplaneIdToAirplaneDict = airplanes.reduce((acc, cum) => {
        acc[cum.id] = cum;
        return acc;
      }, {});
      const flightsData = data.map((flight) => ({
        ...flight,
        totalSeats: airplaneIdToAirplaneDict[flight.airplaneId].capacity,
      }));
      const flight = await this.flightRepository.createBulkFlights(flightsData);
      return flight;
    } catch (error) {
      throw error;
    }
  }

  async deleteFlight(id) {
    try {
      await this.flightRepository.deleteFlight(id);
    } catch (error) {
      throw error;
    }
  }

  async getAllFlights(data) {
    try {
      return await this.flightRepository.getAllFlights(data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FlightService;
