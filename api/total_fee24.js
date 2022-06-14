const currencies = require('../api/all_currencies');

const total_fee24 = async function () {
    const currencies_list = await currencies();
    const fee = currencies_list.reduce((acc, currency) => {     
        return acc + Number(currency.fee24h);
    }, 0);
    return fee;
}
module.exports = total_fee24;
