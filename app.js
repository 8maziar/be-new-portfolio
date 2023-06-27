const express = require("express");
const app = express();
const { getTopics } = require("./controllers/getTopics.controller");
const { getEndpoints } = require("./controllers/getEndpoints.controller");

app.get("/api", getEndpoints);
app.get("/api/topics", getTopics);

app.all("*", (req, res) => {
  res.status(404).send({ status: 404, msg: "Not Found!" });
});
module.exports = app;
