const airplane = require("../models/airplane");
const {FlightRepossitory, AirplaneRepository} = require("../repository/index")

class FlightService {
    constructor(){
        this.flightRepossitory = new FlightRepossitory();
        this.airplanerepository = new AirplaneRepository();
    }

    async CreateFlight (data){
        try {
            const airplane = await this.airplanerepository.getairplane(data.airplaneid)
            const flight = await this.flightRepossitory.Createflight(
                {...data, 
                TotalSeat:airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer", error);
            throw {error};
        }
    }
}

module.exports = FlightService;

