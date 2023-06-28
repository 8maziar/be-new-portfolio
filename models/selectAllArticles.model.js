const db = require("../db/connection");

exports.selectAllArticles = () => {
  return db
    .query(
      "SELECT author, title, article_id, topic, created_at, votes, article_img_url, CAST((SELECT COUNT(*) FROM comments WHERE comments.article_id = articles.article_id) AS INT) AS comment_count FROM articles ORDER BY created_at DESC;"
    )
    .then(({ rows }) => rows);
};
