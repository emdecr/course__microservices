const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res, next) => {});

app.post("/events", (req, res, next) => {});

app.listen(4002, () => {
  console.log("QUERY SERVICE ON PORT 4002");
});
