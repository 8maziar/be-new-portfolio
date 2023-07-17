const { selectAllArticles } = require("../models/selectAllArticles.model");

exports.getAllArticles = (req, res, next) => {
  const { topic } = req.query;
  selectAllArticles(topic)
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch(next);
};
