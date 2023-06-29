const { getTopics } = require("./getTopics.controller");
const { getEndpoints } = require("./getEndpoints.controller");
const { getArticles } = require("./getArticles.controller");
const { getAllArticles } = require("./getAllArticles.controller");
const { getCommentsByArticleId } = require("./getCommentsByArticleId.controller");

module.exports = { getTopics, getEndpoints, getArticles, getAllArticles, getCommentsByArticleId};
