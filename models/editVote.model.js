const db = require("../db/connection");

exports.editVote = (id, inc_votes) => {
  return db.query(`SELECT votes FROM comments WHERE comment_id = $1;`, [id]).then(({ rows }) => {
    const sum = rows[0].votes + inc_votes;
    return db.query(`UPDATE comments SET votes = $1 WHERE comment_id = $2 RETURNING *;`, [sum, id]).then(({ rows }) => rows[0]);
  });
};
