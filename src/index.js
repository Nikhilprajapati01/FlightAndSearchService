const express = require("express");
 const {PORT} = require("./config/ServerConfig.js");
const {Airport, City} = require('./models/index')







 const bodyParser = require("body-parser");

 const apiRoutes = require("./routes/index.js");
const { Model } = require("sequelize");
const db = require('./models/index');



const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  
  app.listen(PORT, async () => {
      console.log(`Server started on http://localhost:${PORT}`);
      console.log(process.env.PORT);


      // if(process.env.SYNC_DB){
      //   db.sequelize.sync({alert:true});
      // }
      // const airport = await airports.getall();
      // console.log(airport);

      // const airport = await City.findAll({
      //   where:{
      //     id: 4
      //   },
      //   include:[
      //     {
      //       model:Airport,
      //     }
      //   ]
      // })
      // console.log(airport);
      

  }); 
};

setupAndStartServer();