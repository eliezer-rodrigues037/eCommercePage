const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var multer = require("multer");
var upload = multer();
const app = express();

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    },
});

module.exports = upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//for parsing multipart/form-data
app.use(upload.array());
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
