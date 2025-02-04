const {Flights} = require('../models/index');

class FlightRepossitory{
  
    async Createflight (data){
            try {
                const flight = await Flights.create(data)
                return flight;
                
            } catch (error) {
                console.log("something is missing in create flight", error);
                throw error;
            }
    }
}

module.exports = FlightRepossitory;