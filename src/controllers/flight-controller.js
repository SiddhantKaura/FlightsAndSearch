const { FlightService } = require("../services");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const data = req.body;
    const flight = await flightService.createFlight(data);
    return res.status(200).json({ success: true, data: flight });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const createBulk = async (req, res) => {
  try {
    const data = req.body;
    const flights = await flightService.createBulkFlights(data);
    return res.status(200).json({ success: true, data: flights });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params, " hey");
    await flightService.deleteFlight(id);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const getAll = async (req, res) => {
  try {
    const data = req.body;
    const flights = await flightService.getAllFlights(data);
    return res.status(200).json({ success: true, data: flights });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

module.exports = { create, createBulk, destroy, getAll };
