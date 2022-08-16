const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//for parsing multipart/form-data
app.use(express.static("public"));

app.use(
    cors({
        origin: "*",
    })
);

//Importa todas as controllers.
require("./app/controllers/index.js")(app);

app.listen(3000, function () {
    console.log("Api started.");
});
