const express = require("express");
const app = express();
const { getTopics, getEndpoints, getArticles, getAllArticles, getCommentsByArticleId } = require("./controllers/controllers");
const { handleCustomErrors, handlePsqlErrors, handleServerErrors } = require("./error-handlers/errors");

app.get("/api", getEndpoints);
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticles);
app.get("/api/articles", getAllArticles);
app.get("/api/articles/:article_id/comments", getCommentsByArticleId);

app.all("*", (req, res) => {
  res.status(404).send({ status: 404, msg: "Not Found!" });
});

app.use(handlePsqlErrors);

app.use(handleCustomErrors);

app.use(handleServerErrors);

module.exports = app;
