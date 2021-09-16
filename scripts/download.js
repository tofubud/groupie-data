const axios = require("axios");
const fs = require("fs");

const n = 9844;
const start = 7123;
const batchSize = 1;

(async () => {
  for (let i = start; i <= n; i += batchSize) {
    try {
      console.log(`(${i}/${n}) fetching...`);
      const rsp = await axios.get(`https://api.peacevoid.world/${i}`);
      fs.writeFile(
        `../data/tokens/${i}.json`,
        JSON.stringify(rsp.data, null, "  "),
        (err) => err && console.error("failed to write", err)
      );
    } catch (e) {
      console.error(`failed to fetch token ${i}`, e);
    }
  }
})();
