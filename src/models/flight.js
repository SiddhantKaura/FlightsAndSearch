"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init(
    {
      flightNumber: { type: DataTypes.STRING, allowNull: false },
      totalSeats: { type: DataTypes.INTEGER, allowNull: false },
      sourceAirportId: { type: DataTypes.INTEGER, allowNull: false },
      destinationAirportId: { type: DataTypes.INTEGER, allowNull: false },
      airplaneId: { type: DataTypes.INTEGER, allowNull: false },
      departureTime: { type: DataTypes.DATE, allowNull: false },
      arrivalTime: { type: DataTypes.DATE, allowNull: false },
      price: {type: DataTypes.INTEGER, allowNull: false}
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
