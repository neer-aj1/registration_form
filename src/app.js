const express = require('express');
const app = express();
const path = require('path');

//to connect to mongoDB
require("./Database/connection");

//to select the port
const port = process.env.PORT || 3000;

//to find the path of the static files so that the can be read using app.use()
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

//used to listen to the request made on the port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});