'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


     await queryInterface.bulkInsert('Airports', [
      {
      name: 'Kempegowda International Airport',
      cityid: 4,
      createdAt: new Date(),
      updatedAt: new Date()

     },
      {
      name: 'Kadapa Airport',
      cityid: 4,
      createdAt: new Date(),
      updatedAt: new Date()

     },
      {
      name: 'Tirupati Airport',
      cityid: 4,
      createdAt: new Date(),
      updatedAt: new Date()

     },
      {
      name: 'Coimbatore International Airport ',
      cityid: 4,
      createdAt: new Date(),
      updatedAt: new Date()

     },
      {
      name: 'Indira Gandhi International Airport ',
      cityid: 1,
      createdAt: new Date(),
      updatedAt: new Date()

     },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
