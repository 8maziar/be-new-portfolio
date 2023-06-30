exports.handlePsqlErrors = (err, req, res, next) => {
  if (err.code === "22P02" || err.code === "23503" || err.code === "23502") res.status(400).send({ status: 400, msg: "Bad Request" });
  else next(err);
};

exports.handleCustomErrors = (err, req, res, next) => {
  if (err.msg) res.status(err.status).send({ msg: err.msg });
  else next(err);
};

exports.handleServerErrors = (err, req, res, next) => {
  console.log(err, "<---------- 500 error handler");
  res.status(500).send({ msg: "Error 500 something broken ..." });
};
