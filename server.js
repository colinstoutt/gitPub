const drinks = require("./models/drinks.js");
const foods = require("./models/foods.js");
console.log(foods);

const express = require("express");
const app = express();

// index
app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

// get drinks
app.get("/drinks", (req, res) => {
  //   res.send(drinks);
  res.render("drinks_index.ejs", {
    allDrinks: drinks,
  });
});
// show drink
app.get("/drinks/:id", (req, res) => {
  res.render("drinks_show.ejs", {
    drink: drinks[req.params.id],
  });
});

// get food
app.get("/foods", (req, res) => {
  //   res.send(drinks);
  res.render("food_index.ejs", {
    allFoods: foods,
  });
});
// show food
app.get("/foods/:id", (req, res) => {
  res.render("food_show.ejs", {
    food: foods[req.params.id],
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("listening...");
});
