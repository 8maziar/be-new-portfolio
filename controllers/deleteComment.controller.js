const { checkCommentExists } = require("../models/checkCommentExists.model");
const { deleteComment } = require("../models/deleteComment.model");

exports.deleteComment = (req, res, next) => {
  const { comment_id } = req.params;

  const promises = [checkCommentExists(comment_id), deleteComment(comment_id)];

  Promise.all(promises)
    .then((resolved) => {
      res.status(204).send();
    })
    .catch(next);
};
