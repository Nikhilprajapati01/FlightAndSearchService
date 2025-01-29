const {Airport} = require('../models/index.js');

const { Op, where } = require("sequelize");

class AirportrRepository  {

  Create =  async ({cityid,name}) => {
        try {
            const airport = await Airport.bulkCreate([{cityid, name}])
            return airport;
        } catch (error) {
            console.log("something is missing in create ", error);
            throw error
        }
    }  

}



module.exports = AirportrRepository;

