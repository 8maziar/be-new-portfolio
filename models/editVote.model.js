const db = require("../db/connection");

exports.editVote = (id, inc_votes) => {
  return db
    .query(
      `
    UPDATE articles
    SET votes = votes + $1
    WHERE article_id = $2
    RETURNING *;
  `,
      [inc_votes, id]
    )
    .then(({ rows }) => rows[0]);
};
