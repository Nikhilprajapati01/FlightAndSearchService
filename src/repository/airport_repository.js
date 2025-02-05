const {Airport} = require('../models/index.js');

const { Op, where } = require("sequelize");

class AirportrRepository  {

  Create =  async (data) => {
        try {
            const airport = await Airport.bulkCreate(data)
            return airport;
        } catch (error) {
            console.log("something is missing in create ", error);
            throw error
        }
    }  

}



module.exports = AirportrRepository;

