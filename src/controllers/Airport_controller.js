// const {AirportService}  = require('../services/index');

// const Airportservice = new AirportService();


// const create = async (req, res) => {
//     try {
        
//         const {cityId} = req.param.id
//       const { name} = req.body;
//               const city = await Airportservice.Create({cityId, name});
//         return res.status(201).json({
//             data: city,
//             success: true,
//             massage: "successfully created Airport",
//             error: {},
//         });
//     } catch (error) {
//         console.log("Something went wrong at controller layer");
//         return res.status(500).json({
//             data: {},
//             success: false,
//             massage: "failed to Airport city",
//             error: error,
//         });
//     }
// };

// module.exports ={
//     create
// }