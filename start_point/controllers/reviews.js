var films = require('../client/src/models/films')();
var film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require("express");
var reviewRouter = express.Router();

//Create
reviewRouter.post("/api/films/:id", function(req, res){
  films[req.params.id].reviews.push(req.body.review);
  res.json({data: films[req.params.id]});
});

// //Update
// reviewRouter.put("/api/films/:id", function(req, res){
//   films[req.params.id] = req.body.film;
//   res.json({data: films});
// });

// //Delete
// reviewRouter.delete("/api/films/:id", function(req, res){
//   films.splice(req.params.id, 1);
//   res.json({data:films});
// });

module.exports = reviewRouter;