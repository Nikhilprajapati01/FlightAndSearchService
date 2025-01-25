const { Op } = require('sequelize');

const {City} = require('../models/index');


class CityRepository {
 
    async creatCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw new Error("Error while creating city");
            
        }
    }

    async deleteCity({city_id}) {
        try {
            const City = await City.destroy(
                {where: {id: city_id}}
            );
            return true;
        } catch (error) {
            throw new Error("Error while deleting city");
            
        }
    }

    async updateCity(city_id, data){
        try {
            const City = await City.findByPk(city_id);
            City.name = data.name;
            await City.save();
            return City;
        } catch (error) {
            thro("Error while updating city");
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities(filter) { // filter can be empty also
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;