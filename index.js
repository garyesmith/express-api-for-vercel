const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.send({"version":"1.0","status":"ok"});
});

app.get("/posts", (req, res) => {
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("API is running on port 3000.");
});


module.exports = app;