exports.handleServiceErrors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("Server Error!");
};
