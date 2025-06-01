const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this. CityRepository = new CityRepository();
  }

  async createCity(name) {
    try {
      this.CityRepository.createCity({ name });
    } catch (error) {
      throw error;
    }
  }

  async deleteCity(id) {
    try {
      this.CityRepository.deleteCity({ id });
    } catch (error) {
      throw error;
    }
  }

  async updateCity(id, name) {
    try {
      this.CityRepository.updateCity({ id, data: { name } });
    } catch (error) {
      throw error;
    }
  }

  async getCity(id) {
    try {
      return this.CityRepository.getCity(id);
    } catch (error) {
      throw error;
    }
  }

  async getAllCities(filter) {
    try {
      return this.CityRepository.getAllCities(filter);
    } catch (error) {
      throw error;
    }
  }

  async createAllCities(cityNames) {
    try {
      const cities = cityNames.map((cityName) => ({name: cityName}));
      return this.CityRepository.createAllCities(cities);
    }
    catch(error){
      throw error;
    }
  }

  async getAllAirports(cityId) {
    try{
      return this.CityRepository.getAllAirports(cityId);
    }
    catch(error){
      throw error;
    }
  }
}

module.exports = CityService;
