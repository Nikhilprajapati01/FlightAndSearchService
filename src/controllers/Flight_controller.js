const { FlightService } = require("../services/index")

const Flightservice = new FlightService();

const create = async (req, res) => {
    try {
        const Flight = await Flightservice.CreateFlight(req.body);
        return res.status(201).json({
            data: Flight,
            success: true,
            massage: "successfully created Flight",
            error: {},
        });
    } catch (error) {
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            massage: "failed to create city",
            error: error,
        })
    }
}

    module.exports = {
        create
    }