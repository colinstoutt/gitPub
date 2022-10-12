const drinks = require("./models/drinks.js");

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
// show

const port = 3000;
app.listen(port, () => {
  console.log("listening...");
});
