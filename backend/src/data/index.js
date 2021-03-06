const elastic = require("../elastic");
const quotes = require("./quotes.json");

const esAction = {
  index: {
    _index: elastic.index,
    _type: elastic.type
  }
};

const populateDatabase = async () => {
  const docs = [];
  quotes.forEach(quote => {
    docs.push(esAction);
    docs.push(quote);
  });
  return elastic.esclient.bulk({ body: docs });
};

module.exports = {
  populateDatabase
};
