const { selectArticles } = require("../models/selectArticles.model");

exports.getArticles = (req, res, next) => {
  const id = req.params.article_id;
  selectArticles(id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};
