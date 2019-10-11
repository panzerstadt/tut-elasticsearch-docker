const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const port = process.env.NODE_PORT || 4000;

function start() {
  return app
    .use(cors({ origin: "http://localhost:3000" }))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use("/quotes", routes)
    .use((_req, res) =>
      res.status(404).json({ success: false, error: "Route not found" })
    )
    .listen(port, () => console.log(`Server ready on port ${port}`));
}

module.exports = {
  start
};
