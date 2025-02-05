const {Airplane} = require("../models/index");

class AirplaneRepository{

    async getairplane (id){

        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("something is missing in create ", error);
            throw error
        }
    }
}

module.exports = AirplaneRepository;