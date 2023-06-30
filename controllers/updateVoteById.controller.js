const { checkArticleExist } = require("../models/checkArticle.model");
const { editVote } = require("../models/editVote.model");

exports.updateVoteById = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;

  const promises = [checkArticleExist(article_id), editVote(article_id, inc_votes)];

  Promise.all(promises)
    .then((resolved) => {
      const article = resolved[1];
      res.status(201).send({ article });
    })
    .catch(next);
};
