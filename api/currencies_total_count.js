const axios = require("axios");
const { swap_indexer, whiteListUri } = require("../config.js");

const currencies_total_count = async function() { 
  const data = await axios.post(`${swap_indexer}/currencies`, {
    currenciesAddresses: [],
    limit: 0,
    offset: 0,    
    whiteListUri: whiteListUri,
  })

  return data.data.totalCount;
}

module.exports = currencies_total_count;