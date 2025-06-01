const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.findOrCreate({ where: { name } });
    } catch (error) {
      throw error;
    }
  }

  async deleteCity({ id }) {
    try {
      await City.destroy({ where: { id: id } });
    } catch (error) {
      throw error;
    }
  }

  async updateCity({ id, data }) {
    try {
      const entity = await City.findOne({ where: { id } });
      await entity.update(data);
    } catch (error) {
      throw error;
    }
  }

  async getCity(id) {
    try {
      const city = await City.findByPk(id);
      return city;
    } catch (error) {
      throw error;
    }
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: { name: { [Op.startsWith]: filter.name } },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      throw error;
    }
  }

  async createAllCities(citiesPayload) {
    try {
      console.log(citiesPayload, " here");
      const cities = await City.bulkCreate(citiesPayload);
      return cities;
    } catch (error) {
      console.log(error, " hey");
      throw error;
    }
  }

  async getAllAirports(cityId) {
    try {
      console.log(cityId, " id");
      const city = await City.findByPk(cityId);
      // Magic of associations in Sequelize
      const airports = await city.getAirports();
      console.log(city, " here ", typeof airports);
      return airports;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
