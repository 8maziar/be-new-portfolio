const { checkArticleExist } = require("../models/checkArticle.model");
const { selectCommentsByArticleId } = require("../models/selectCommentsByArticleId.model");

exports.getCommentsByArticleId = (req, res, next) => {
  const id = req.params.article_id;

  const promises = [selectCommentsByArticleId(id)];

  if (id) promises.push(checkArticleExist(id));

  Promise.all(promises)

    .then((resolvedPromises) => {
      const comments = resolvedPromises[0];
      res.status(200).send({ comments });
    })
    .catch(next);
};
