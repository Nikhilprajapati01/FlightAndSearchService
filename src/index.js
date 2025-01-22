const express = require("express");
 const {PORT} = require("./config/ServerConfig.js");


const setupAndStartServer = async () => {
  const app = express();
  app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
      console.log(process.env.PORT);
  })
};

setupAndStartServer();