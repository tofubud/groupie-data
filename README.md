# Peaceful Groupies Rarity

For ui visit [https://nftjoy.club/groupies](https://nftjoy.club/groupies)

## using rarity data

see `/data` directory for outputs
`metadata.json`: compiled metadata for each groupie (groupy?)
`traits.json`: aggregate rarity by trait
`score.json`: per token rarity score

## rarity calculation

uses the following calculation: https://raritytools.medium.com/ranking-rarity-understanding-rarity-calculation-methods-86ceaeb9b98c
see `./scripts/score.js` for implementation

## sample install and pipeline

```
npm install
cd ./scripts
node download.js
node compile.js
node traits.js
node score.js
```
