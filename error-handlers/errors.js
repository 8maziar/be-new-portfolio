exports.handleServiceErrors = (err, req, res, next) => {
  res.status(500).send("Server Error!");
};
