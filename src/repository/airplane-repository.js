const { Airplanes } = require("../models/index");
const { Op } = require("sequelize");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airplane = await Airplanes.findByPk(id);
      return airplane;
    } catch (error) {
      throw error;
    }
  }

  async getAirplanes(ids) {
    try {
      const airplanes = await Airplanes.findAll({
        where: { id: { [Op.in]: ids } },
      });
      return airplanes;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
