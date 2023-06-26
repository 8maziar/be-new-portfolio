const { selectAllTopics } = require("../models/selectAllTopics.model");

exports.getTopics = (req, res) => {
  selectAllTopics().then((topics) => {
    res.status(200).send({ topics });
  });
};
