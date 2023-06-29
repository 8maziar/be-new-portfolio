const { checkArticleExist } = require("../models/checkArticle.model");
const { checkUsername } = require("../models/checkUsername.model");
const { insertComment } = require("../models/insertComment.model");

exports.postComment = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body } = req.body;

  const promises = [];
  if (article_id) {
    promises.push(checkArticleExist(article_id));
  }
  if (username) {
    promises.push(checkUsername(username));
  }

  Promise.all(promises)
    .then((resolvedPromises) => {
      insertComment(article_id, username, body).then((comment)=>{
          res.status(201).send({ comment })
      })
    })
    .catch(next);
};
