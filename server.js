var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var app = express();
var bodyparser = require("body-parser");
mongoose.Promise = global.Promise;
 
app.use(express.static( __dirname + '/public/dist' ));
app.use(bodyparser.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});


app.listen(8000, function(){
    console.log("listening to port 8000");
});