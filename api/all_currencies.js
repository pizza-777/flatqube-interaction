const axios = require("axios");
const { swap_indexer, token_white_list_url } = require("../config.js");

const all_currencies = async function () {

    const data = await axios.post(`${swap_indexer}/currencies`, {
        "limit": 1000,
        "offset": 0,
        whiteListUri: token_white_list_url,
    })
    return data.data.currencies;
}

module.exports = all_currencies;