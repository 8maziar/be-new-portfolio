const express = require("express");
const app = express();
const { getTopics, getEndpoints, getArticles } = require("./controllers/controllers");
const { handleCustomError } = require("./error-handlers/errors");


app.get("/api", getEndpoints);
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticles);

app.all("*", (req, res) => {
  res.status(404).send({ status: 404, msg: "Not Found!" });
});

app.use(handleCustomError)

module.exports = app;
