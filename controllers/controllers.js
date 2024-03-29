const { getTopics } = require("./getTopics.controller");
const { getEndpoints } = require("./getEndpoints.controller");
const { getArticles } = require("./getArticles.controller");
const { getAllArticles } = require("./getAllArticles.controller");
const { getCommentsByArticleId } = require("./getCommentsByArticleId.controller");
const { postComment } = require("./postComment.controller");
const { updateVoteById } = require("./updateVoteById.controller");
const { deleteComment } = require("./deleteComment.controller");
const { getAllUsers } = require("./getAllUsers.controller");

module.exports = { getTopics, getEndpoints, getArticles, getAllArticles, getCommentsByArticleId, postComment, updateVoteById, deleteComment, getAllUsers };
