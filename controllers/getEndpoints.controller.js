const { selectAllEndpoints } = require("../models/selectAllEndpoints");

exports.getEndpoints = (req, res, next) => {
  selectAllEndpoints()
    .then((endpoints) => {
      res.status(200).send({ endpoints });
    })
    .catch(next);
};
