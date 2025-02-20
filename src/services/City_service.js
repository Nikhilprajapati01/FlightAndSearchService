const { CityRepository } = require('../repository/index.js');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.creatCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer", error);
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer", error);
            throw {error};
        }
    }

    async updateCity(cityId, data) {  // {name: "indore"}
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer" , error);
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

   

   
}

module.exports = CityService;