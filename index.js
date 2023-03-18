const filePareser = require("./config/fileParser");
const Query = require("./config/Query.js");
const massScripting = require("./ScriptWriter/index.js");

const GPTmodel = "gpt-3.5-turbo";

(async function(){
    let assets = await filePareser()
    let Q = new Query(assets.keywords,assets.BaseQuery,assets.indecator);
    let title = assets.title
    assets = await Q.render();
    console.log(assets)
    await massScripting(assets, GPTmodel,title);
    console.log("le")
    
})()