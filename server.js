const express = require("express");
const app = express();

// index
app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

// show

const port = 3000;
app.listen(port, () => {
  console.log("listening...");
});
