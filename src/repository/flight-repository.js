const { Flight } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(filter) {
    let filterData = {};
    if (filter.sourceAirportId) {
      filterData.sourceAirportId = filter.sourceAirportId;
    }
    if (filter.destinationAirportId) {
      filterData.destinationAirportId = filter.destinationAirportId;
    }
    const priceFilter = [];

    if (filter.minPrice) {
      priceFilter.push({ price: { [Op.gte]: filter.minPrice } });
    }
    if (filter.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: filter.maxPrice } });
    }
    filterData = { ...filterData, [Op.and]: priceFilter };
    return filterData;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      throw error;
    }
  }

  async createBulkFlights(data) {
    try {
        const flights = await Flight.bulkCreate(data);
        return flights;
    }
    catch(error){
        throw error;
    }
  }

  async getFlight(id) {
    try {
      const flight = await Flight.findByPk(id);
      return flight;
    } catch (error) {
      throw error;
    }
  }

  async deleteFlight(id) {
    try {
        await Flight.destroy({where: {id}}); 
    }
    catch(error){
        throw error;
    }
  }

  async getAllFlights(filter) {
    try {
      const filterData = this.#createFilter(filter);
      console.log(filterData, " here");
      const flights = await Flight.findAll({ where: filterData });
      return flights;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FlightRepository;
