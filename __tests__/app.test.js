const request = require("supertest");
const app = require("../app");
const seed = require("../db/seeds/seed");
const db = require("../db/connection");
const { topicData, userData, articleData, commentData } = require("../db/data/test-data/index");
const JSONEndpoints = require("../endpoints.json");

beforeEach(() => seed({ topicData, userData, articleData, commentData }));

afterAll(() => {
  return db.end();
});

describe("GET /api/topics", () => {
  test("status 200, should return an array of topic objects, each of which should have the following properties:slug ,description", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then(({ body }) => {
        const { topics } = body;
        expect(topics).toHaveLength(3);
        topics.forEach((topic) => {
          expect(topic).toHaveProperty("slug", expect.any(String));
          expect(topic).toHaveProperty("description", expect.any(String));
        });
      });
  });
});

describe("GET /api/articles/:article_id", () => {
  test("status 200, should return an article object, which should have the following properties: author ,title ,article_id ,body ,topic ,created_at ,votes ,article_img_url", () => {
    return request(app)
      .get("/api/articles/2")
      .expect(200)
      .then(({ body }) => {
        const { article } = body;
        expect(article.article_id).toBe(2);
        expect(article).toHaveProperty("author", expect.any(String));
        expect(article).toHaveProperty("title", expect.any(String));
        expect(article).toHaveProperty("article_id", expect.any(Number));
        expect(article).toHaveProperty("topic", expect.any(String));
        expect(article).toHaveProperty("created_at", expect.any(String));
        expect(article).toHaveProperty("votes", expect.any(Number));
        expect(article).toHaveProperty("article_img_url", expect.any(String));
        expect(article).toHaveProperty("body", expect.any(String));
      });
  });
  test("status 404, should return obj with message of not found", () => {
    return request(app)
      .get("/api/articles/442")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not Found");
      });
  });
  test("status 400, should return obj with message of bad request", () => {
    return request(app)
      .get("/api/articles/ten")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("Bad Request");
      });
  });
});

describe("GET /api/articles", () => {
  test("status 200, should return array of the articles which every object should have the following properties: author ,title ,article_id ,topic ,created_at ,votes ,article_img_url, comment_counts", () => {
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then(({ body }) => {
        const { articles } = body;
        expect(articles).toHaveLength(13);
        expect(articles[0].created_at).toBe("2020-11-03T09:12:00.000Z");
        articles.forEach((article) => {
          expect(article).not.toHaveProperty("body");
          expect(article).toHaveProperty("author", expect.any(String));
          expect(article).toHaveProperty("title", expect.any(String));
          expect(article).toHaveProperty("article_id", expect.any(Number));
          expect(article).toHaveProperty("topic", expect.any(String));
          expect(article).toHaveProperty("created_at", expect.any(String));
          expect(article).toHaveProperty("votes", expect.any(Number));
          expect(article).toHaveProperty("article_img_url", expect.any(String));
          expect(article).toHaveProperty("comment_count", expect.any(Number));
        });
      });
  });
});

describe("GET /api", () => {
  test("status 200, should return an object describing all the available endpoints on your API", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(({ body }) => {
        const { endpoints } = body;
        expect(endpoints).toMatchObject(JSONEndpoints);
      });
  });
});

describe("GET /api/notcorrect", () => {
  test("404, wrong url address", () => {
    return request(app)
      .get("/api/notcorrect")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not Found!");
      });
  });
});
