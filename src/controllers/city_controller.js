const {CityService} = require("../services/index.js");

const cityService = new CityService();


// use post method 
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            massage:  "successfully created city",
            error:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            massage:  "failed to create city",
            error: error
        });
        
    }
};

// use delete method
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            massage:  "successfully delete city",
            error:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            massage:  "failed to delete city",
            error: error
        });
        
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            massage:  "successfully update city",
            error:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            massage:  "failed to update city",
            error: error
        });
    }
}   


const get = async (req, res) => {

    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            massage:  "successfully delete city",
            error:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
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

