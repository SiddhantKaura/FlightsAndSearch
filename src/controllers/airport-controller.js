const { AirportService } = require("../services/index");

const airportService = new AirportService();
const create = async (req, res) => {
  try {
    const {name, cityId} = req.body;
    await airportService.createAirport(name, cityId);
    return res.status(200).send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const updateAirport = () => {};

module.exports = {create};