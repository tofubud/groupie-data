const fs = require("fs");

(async () => {
  const grouped = [];

  const files = fs.readdirSync("../data/tokens");
  files.forEach((f) => {
    const data = JSON.parse(fs.readFileSync(`./data/tokens/${f}`));
    grouped.push({
      ...data,
      tokenId: f.replace(".json", ""),
    });
  });

  fs.writeFileSync(
    "../data/metadata.json",
    JSON.stringify(grouped, null, "  ")
  );
})();
