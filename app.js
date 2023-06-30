const express = require("express");
const app = express();
const { getTopics, getEndpoints, getArticles, getAllArticles, getCommentsByArticleId, postComment, updateVoteById, deleteComment } = require("./controllers/controllers");
const { handleCustomErrors, handlePsqlErrors, handleServerErrors } = require("./error-handlers/errors");

app.use(express.json());

app.get("/api", getEndpoints);
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticles);
app.get("/api/articles", getAllArticles);
app.get("/api/articles/:article_id/comments", getCommentsByArticleId);
app.post("/api/articles/:article_id/comments", postComment);
app.patch("/api/articles/:article_id", updateVoteById);
app.delete("/api/comments/:comment_id", deleteComment);

app.all("*", (req, res) => {
  res.status(404).send({ status: 404, msg: "Not Found!" });
});

app.use(handlePsqlErrors);

app.use(handleCustomErrors);

app.use(handleServerErrors);

module.exports = app;
