const { selectAllUsers } = require("../models/selectAllUsers.model");

exports.getAllUsers = (req, res, next) => {
  selectAllUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};
