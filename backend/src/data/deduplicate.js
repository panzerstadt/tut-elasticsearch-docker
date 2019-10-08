const quotes = require("./quotes.json");
const fs = require("fs");

const chk = quotes.map(o => JSON.stringify(o));

const cleaned = Array.from(new Set([...chk]));
const out = cleaned.map(s => JSON.parse(s));

if (quotes.length !== out.length) {
  console.log("deduplicated data. writing new .json file.");
  fs.writeFile("./quotes_dedupe.json", JSON.stringify(out), err =>
    console.log(err)
  );
}
