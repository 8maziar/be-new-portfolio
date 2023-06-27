exports.handleCustomError = (err, req, res, next) => {
  if (err.msg) res.status(err.status).send({ msg: err.msg });
  else next(err);
};

exports.handlePsqlErrors = (err, req, res, next) => {
  if (err.code) res.status(400).send({ status: 400, msg: "Bad Request" });
  else next(err);
};
