'use strict';
const {
  Model
} = require('sequelize');
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
  Flight.init({
    FlightNumber:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true

    },
    AirplaneId: {
      type:DataTypes.INTEGER,
       allowNull:false
    },
    DepartureAirportid:{
      type:DataTypes.INTEGER,
       allowNull:false
    },
    ArrivalAirportid:{
      type:DataTypes.INTEGER,
       allowNull:false
    },
    ArrivalTime: {
      type:DataTypes.DATE,
       allowNull:false
    },
    DepartureTime: {
      type:DataTypes.DATE,
       allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
       allowNull:false
    },
    BordingGate: DataTypes.STRING,
    TotalSeat:{
      type:DataTypes.INTEGER,
       allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};