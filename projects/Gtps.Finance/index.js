const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
  misrepresentedTokens: true,
  polygon: {
    tvl: getUniTVL({
      factory: '0x2fcb5d3ab09b5a3aefca6fda5c62074411aea6b3', 
      chain: 'polygon', 
      useDefaultCoreAssets: false
    })
  },
};
