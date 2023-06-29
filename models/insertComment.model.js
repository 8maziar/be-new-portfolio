const db = require("../db/connection");

exports.insertComment = (article_id, username, body) => {
  return db
    .query(
      `
        INSERT INTO comments (body, article_id, author, votes)
        VALUES ($1, $2, (SELECT username FROM users WHERE username = $3), 0)
        RETURNING *;
      `,
      [body, article_id, username]
    )
    .then(({ rows }) => rows[0]);
};
