const fs = require("fs");
const traits = require("../data/traits.json");
const metadata = require("../data/metadata.json");

(async () => {
  const rank = metadata.map((meta) => {
    let score = meta.attributes.reduce(
      (acc, attr) => acc + traits[attr.trait_type][attr.value],
      0
    );

    let byAttr = meta.attributes.map((attr) => ({
      [attr.trait_type]: {
        name: attr.value,
        p: (traits[attr.trait_type][attr.value] / metadata.length) * 100,
      },
    }));

    byAttr.push({
      ["Trait Count"]: {
        name: meta.attributes.length,
        p:
          (traits["Count"][`${meta.attributes.length}`] / metadata.length) *
          100,
      },
    });

    score += traits["Count"][`${meta.attributes.length}`];
    return {
      tokenId: meta.tokenId,
      image: meta.image,
      attributes: byAttr,
      score,
    };
  });

  const scores = [...new Set(rank.map((r) => r.score))].sort((a, b) => a - b);

  const withRank = rank
    .map((item) => ({
      ...item,
      rank: scores.findIndex((score) => score === item.score) + 1,
    }))
    .sort((a, b) => a.rank - b.rank);

  fs.writeFileSync("../data/rarity.json", JSON.stringify(withRank, null, "  "));
})();
