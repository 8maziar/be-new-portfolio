const request = require("supertest");
const app = require("../app");
const seed = require("../db/seeds/seed");
const db = require("../db/connection");
const { topicData, userData, articleData, commentData } = require("../db/data/test-data/index");
const fs = require("fs/promises");

beforeEach(() => seed({ topicData, userData, articleData, commentData }));

afterAll(() => {
  return db.end();
});

describe("GET /api/topics", () => {
  it("status 200, should return an array of topic objects, each of which should have the following properties:slug ,description", () => {
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

describe("GET /api", () => {
  it("status 200, should return an object describing all the available endpoints on your API", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(({ body }) => {
        const { endpoints } = body;
        fs.readFile(`${__dirname}/../endpoints.json`, "utf-8").then((file) => {
          expect(endpoints).toMatchObject(JSON.parse(file));
        });
      });
  });
});

describe("GET /api/notcorrect", () => {
  it("404, wrong url address", () => {
    return request(app).get("/api/notcorrect").expect(404).then(({body})=>{
      expect(body.msg).toBe('Not Found!')
    });
  });
});
