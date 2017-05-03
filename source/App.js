import express from 'express';

var app = express();


app.get("/", function(req, res){
  res.send("Hola API")
});


app.listen(8080);