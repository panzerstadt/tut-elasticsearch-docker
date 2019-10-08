const { Client } = require("@elastic/elasticsearch");
require("dotenv").config();

const elasticURL = process.env.ELASTIC_URL || "http://localhost:9200";
const esclient = new Client({ node: elasticURL });
const index = "quotes";
const type = "quotes";

const createIndex = async () => {
  try {
    await esclient.indices.create({ index });
    console.log(`Created index ${index}`);
  } catch (err) {
    console.error("An error occured while creating the index");
    console.error(err);
  }
};

const setQuotesMapping = async () => {
  try {
    const schema = {
      quote: {
        type: "text"
      },
      author: {
        type: "text"
      }
    };

    await esclient.indices.putMapping({
      index,
      type,
      include_type_name: true,
      body: {
        properties: schema
      }
    });

    console.log("quotes mapping created successfully");
  } catch (err) {
    console.error("An error occured while setting the quote");
    console.error(err);
  }
};

const checkConnection = () => {
  return new Promise(async resolve => {
    console.log("connecting to elasticsearch...");
    let isConnected = false;
    while (!isConnected) {
      try {
        await esclient.cluster.health({});

        const res = await esclient.cluster.pendingTasks({});
        const tasks = res.body.tasks;

        if (tasks.length === 0) {
          isConnected = true;
        } else {
          // logging
          console.log(`waiting for ${tasks.length} pending cluster tasks..`);
          //tasks.forEach(v => console.log(v));
        }
      } catch (_) {}
    }

    console.log(" ");
    console.log("successfully connected to elasticsearch cluster.");
    resolve(true);
  });
};

module.exports = {
  esclient,
  setQuotesMapping,
  checkConnection,
  createIndex,
  index,
  type
};
