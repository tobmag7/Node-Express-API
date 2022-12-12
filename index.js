const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const app = express();
const connectDB = require('./app/config/db.config')
var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({path: './app/config/.env'})
connectDB()
app.use('/', require('./app/routes'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


