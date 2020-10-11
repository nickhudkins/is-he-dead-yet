const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1 style="text-align:center;font-size:2em;color:red;">NO</h1>`);
});
