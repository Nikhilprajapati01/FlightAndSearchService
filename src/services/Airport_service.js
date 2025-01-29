const { AirportRepository } = require('../repository/index');

class AirportService{
    constructor(){
        this.Airportrepository = new AirportRepository();
    }

    async Create ({cityid, name}){
           try {
             const airport = await this.Airportrepository.Create({cityid,name});
             return airport
           } catch (error) {
             console.log(" something wrong in service layer", error);
             throw error;
             
           }
    }
}

module.exports = AirportService;