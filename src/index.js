const express = require('express');
const app = express();
const path = require('path');


//to connect to mongoDB
require("./Database/connection");

//to select the port
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});