const db = require("../db/connection");

exports.selectAllArticles = async (topic) => {

  //  "SELECT author, title, article_id, topic, created_at, votes, article_img_url, CAST((SELECT COUNT(*) FROM comments WHERE comments.article_id = articles.article_id) AS INT) AS comment_count FROM articles ORDER BY created_at DESC";
  let queryStr =
    "SELECT author, title, article_id, topic, created_at, votes, article_img_url, CAST((SELECT COUNT(*) FROM comments WHERE comments.article_id = articles.article_id) AS INT) AS comment_count FROM articles";
  if (topic) {
    const {rows} = await db.query("SELECT * FROM topics;");
    const validTopic = rows.find(row=>row.slug === topic)
    console.log('validTopic:', validTopic)

    if (!validTopic) {
      return Promise.reject({ status: 404, msg: "Not Found" });
    }

    queryStr += ` WHERE articles.topic = '${validTopic.slug}'`;
  }

  return db
    .query(
      queryStr
    )
    .then(({ rows }) => rows);
};
