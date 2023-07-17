const express = require("express");
const app = express();
const { getTopics, getEndpoints, getArticles, getAllArticles, getCommentsByArticleId, postComment, updateVoteById, deleteComment, getAllUsers } = require("./controllers/controllers");
const { handleCustomErrors, handlePsqlErrors, handleServerErrors } = require("./error-handlers/errors");
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/api", getEndpoints);
app.get("/api/topics", getTopics);
app.get("/api/users", getAllUsers);
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
