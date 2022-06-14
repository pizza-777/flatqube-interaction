const t = require("./api");

t.all_currencies().then(data => {
    console.log(data);
    }
).catch(err => {
    console.log(err);
});
