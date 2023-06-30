const { checkArticleExist } = require("../models/checkArticle.model");
const { insertComment } = require("../models/insertComment.model");

exports.postComment = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body } = req.body;

  const promises = [checkArticleExist(article_id),insertComment(article_id, username, body), ];

  Promise.all(promises)
    .then((resolvedPromises) => {
      const comment = resolvedPromises[1];
      res.status(201).send({comment});
    })
    .catch(next);
};
