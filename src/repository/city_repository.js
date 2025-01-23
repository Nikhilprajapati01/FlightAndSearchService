const {City} = require('../models/index');

class CityRepository {
    async createCity({name}) {
        try {
            const City = await City.create({name});
            return City;
        } catch (error) {
            throw new Error("Error while creating city");
            
        }
    }

    async deleteCity({city_id}) {
        try {
            const City = await City.destroy(
                {where: {id: city_id}}
            );
            return City;
        } catch (error) {
            throw new Error("Error while deleting city");
            
        }
    }
}

module.exports = CityRepository;