const { Op, where } = require("sequelize");

const { City } = require("../models/index.js");

class CityRepository {
  async creatCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw new Error("Error while creating city");
    }
  }


  async deleteCity( city_id ) {
    try {
      if (!city_id) {
        throw new Error("City ID is required");
      }
  
      const result = await City.destroy({
        where: { id: city_id },
      });
  
      if (result === 0) {
        throw new Error(`No city found with ID: ${city_id}`);
      }
  
      return true; // Operation succeeded
    } catch (error) {
      console.error("Error while deleting city:", error.message); // Log the actual error
      throw new Error(error.message || "Error while deleting city");
    }
  }
  
  // async deleteCity({ city_id }) {
  //   try {
  //      await City.destroy({
  //       where: { id: city_id },
  //     });
  //     return true;
  //   } catch (error) {
  //     throw new Error("Error while deleting city");
  //   }
  // }

  async updateCity(city_id, data) {
    try {
      const city = await City.update(data, {
        where: {
             id: city_id
        }
      });
      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer", error);
      
      thro("Error while updating city");
    }
  }

  async getCity(city_id) {
    try {

      if (!city_id) {
        throw new Error("City ID is required");
      }

      const city = await City.findByPk(city_id);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer", error.message);
      throw { error };
    }
  }

  async getAllCities() {
    // filter can be empty als
    // o
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer", error);
      throw { error };
    }
  }
}

module.exports = CityRepository;
