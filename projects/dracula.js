const { staking } = require("./helper/staking");
// const utils = require("./helper/utils");

// async function fetch() {
//   var tvl = 0;
//   var staked = await utils.fetchURL("https://dracula.sucks/api-v2.1/stats");
//   staked.data.victimPools.map((pool) => {
//     tvl += pool.tvl;
//   });
//   return tvl;
// }

module.exports = {
  hallmarks: [
    [Math.floor(new Date('2022-03-17')/1e3), 'DRACULA is for now fully focused on it\'s Metaverse product'],
  ],
  methodology: 'DRACULA is for now fully focused on it\'s Metaverse product',
  ethereum: {
    tvl: () => ({}),
    staking: staking('0xC8DFD57E82657f1e7EdEc5A9aA4906230C29A62A', '0xb78b3320493a4efaa1028130c5ba26f0b6085ef8'),
  },
};
