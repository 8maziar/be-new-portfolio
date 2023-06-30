const db = require("../db/connection");

exports.editVote = (id, inc_votes) => {
  return db
    .query(
      `
    UPDATE comments
    SET votes = votes + $1
    WHERE comment_id = $2
    RETURNING *;
  `,
      [inc_votes, id]
    )
    .then(({ rows }) => rows[0]);
};
