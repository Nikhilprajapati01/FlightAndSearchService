const express = require("express");
 const {PORT} = require("./config/ServerConfig.js");







 const bodyParser = require("body-parser");



const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
      console.log(process.env.PORT);
  })
};

setupAndStartServer();