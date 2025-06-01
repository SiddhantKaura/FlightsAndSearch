"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airplanes", [
      {
        modelName: "Airbus A380",
        capacity: 850,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelName: "Boeing 747",
        capacity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelName: "Boeing 777",
        capacity: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelName: "Airbus A340",
        capacity: 475,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelName: "Boeing 787",
        capacity: 440,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
