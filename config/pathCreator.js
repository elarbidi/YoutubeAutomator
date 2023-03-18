const fs = require("fs");
const path = require("path");

async function CreateAssetsPath(title){
    co_path = __dirname + "/../Assets/" + title
    fs.mkdirSync(co_path);
    return co_path;
}

module.exports = CreateAssetsPath