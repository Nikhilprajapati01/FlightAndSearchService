'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FlightNumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      AirplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      DepartureAirportid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ArrivalAirportid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ArrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      DepartureTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      BordingGate: {
        type: Sequelize.STRING,

      },
      TotalSeat: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};