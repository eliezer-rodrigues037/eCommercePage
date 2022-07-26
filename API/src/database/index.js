const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/storeData").catch((error) => handleError(error));

mongoose.Promise = global.Promise;

module.exports = mongoose;
