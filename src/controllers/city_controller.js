const {CityService} = require("../services/index.js");

const CityService = new CityService();

const create = async (req, res) => {
    try {
        const City = await CityService.createCity(req.body);
        return res.status(201).send.json({
            data: City,
            success: true,
            massage:  "successfully created city",
            error:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).send.json({
            data: {},
            success: false,
            massage:  "failed to create city",
            error: error
        });
        
    }
};

const destroy = async (req, res) => {
    try {
        const response = await CityService.deleteCity(req.params.id);
        return res.status(200).send.json({
            data: response,
            success: true,
            massage:  "successfully delete city",
            error:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).send.json({
            data: {},
            success: false,
            massage:  "failed to delete city",
            error: error
        });
        
    }
}

const update = async (req, res) => {
    try {
        const response = await CityService.updateCity(req.params.id, req.body);
        return res.status(200).send.json({
            data: response,
            success: true,
            massage:  "successfully update city",
            error:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).send.json({
            data: {},
            success: false,
            massage:  "failed to update city",
            error: error
        });
    }
}   


const get = async (req, res) => {

    try {
        const response = await CityService.getCity(req.params.id);
        return res.status(200).send.json({
            data: response,
            success: true,
            massage:  "successfully delete city",
            error:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).send.json({
            data: {},
            success: false,
            massage:  "failed get city",
            error: error
        });
        
    }
}


module.exports = {
    create,
    destroy,
    update,
    get,
};

