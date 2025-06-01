const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const city = await cityService.createCity(name);
    return res.status(201).json({ data: city, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ data: "", success: false });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await cityService.deleteCity(id);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

const update = async (req, res) => {
  try {
    const { id: cityId } = req.params;
    const { name } = req.body;
    console.log(cityId, name, " here");
    await cityService.updateCity(cityId, name);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const get = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.getCity(id);
    return res.status(200).json({ success: true, data: city });
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
  try {
    const filter = req.query;
    const cities = await cityService.getAllCities(filter);
    return res.status(200).json({ success: true, data: cities });
  } catch (error) {
    console.log(error);
  }
};

const createAll = async (req, res) => {
  try {
    const {cities: cityNames} = req.body;
    const cities = await cityService.createAllCities(cityNames);
    return res.status(201).json({success: true, data: cities});
  }
  catch (error){
     return res.status(500).json({success: false});
  }
}

const getAllAirports = async (req, res) => {
  try {
    const {cityId} = req.body;
    const airports = await cityService.getAllAirports(cityId);
    return res.status(200).json({success: true});
  }
  catch(error){
    console.log(error);
    return res.status(500).json({success: false});
  }
}

module.exports = { create, destroy, update, get, getAll, createAll, getAllAirports };
