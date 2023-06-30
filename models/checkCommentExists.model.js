const db = require("../db/connection");
exports.checkCommentExists = (id) => {
  return db.query(`SELECT * FROM comments WHERE comment_id = $1`, [id]).then(({ rows }) => {
    if (!rows.length) {
      return Promise.reject({ status: 404, msg: "Not Found" });
    }
  });
};
