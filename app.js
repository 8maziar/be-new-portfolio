const express = require("express");
const app = express();
const { getTopics } = require("./controllers/getTopics.controller");
const { handleServiceErrors } = require("./error-handlers/errors");

app.get("/api/topics", getTopics);



module.exports = app;
