const fs = require("fs");

async function filePareser(){
    var content = fs.readFileSync(__dirname+"/../assets.json","utf-8");
    content = JSON.parse(content)
    return content;
}

module.exports = filePareser