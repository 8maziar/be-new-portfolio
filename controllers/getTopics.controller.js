const { selectAllTopics } = require("../models/selectAllTopics.model");

exports.getTopics = (req, res, next) => {
  selectAllTopics()
    .then((topics) => {
      res.status(200).send({ topics });
    })
    .then(next);
};
