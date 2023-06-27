const { selectArticles } = require("../models/selectArticles");

exports.getArticles = (req, res, next) => {
  selectArticles(req.params).then((article) => {
    res.status(200).send({ article });
  }).catch(next);
};
