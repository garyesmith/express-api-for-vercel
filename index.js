const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
  res.send({"version":"1.0","status":"ok"});
});

app.get("/posts", (req, res) => {
  const file = path.join(process.cwd(), 'data', 'data.json');
  const stringified = fs.readFileSync(file, 'utf8');
  res.setHeader('Content-Type', 'application/json');
  return res.end(stringified);
});

app.listen(3000, () => {
  console.log("API is running on port 3000.");
});


module.exports = app;