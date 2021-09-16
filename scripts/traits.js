const fs = require("fs");
const metadata = require("../data/metadata.json");

(async () => {
  const traits = {};
  traits["Count"] = {};

  metadata.forEach((meta) => {
    meta.attributes.forEach((attr) => {
      traits[attr.trait_type] = traits[attr.trait_type] || {};
      traits[attr.trait_type][attr.value] =
        traits[attr.trait_type][attr.value] || 0;
      traits[attr.trait_type][attr.value] += 1;
    });

    let len = meta.attributes.length;
    traits["Count"][`${len}`] = traits["Count"][`${len}`] || 0;
    traits["Count"][`${len}`] += 1;
  });

  fs.writeFileSync("../data/traits.json", JSON.stringify(traits, null, "  "));
})();
