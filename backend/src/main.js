const elastic = require("./elastic");
const server = require("./server");
const data = require("./data");
require("dotenv").config();

(async function main() {
  const isElasticReady = await elastic.checkConnection();
  if (isElasticReady) {
    const elasticIndex = await elastic.esclient.indices.exists({
      index: elastic.index
    });

    if (!elasticIndex.body) {
      console.log("hydrating database with initial data!");
      await elastic.createIndex(elastic.index);
      await elastic.setQuotesMapping();
      await data.populateDatabase();
    }

    server.start();
  }
})();
