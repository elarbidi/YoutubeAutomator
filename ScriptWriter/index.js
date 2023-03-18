const openai = require("./GPT.js");
const fs = require('fs');
const CreateAssetsPath = require("../config/pathCreator.js");


async function writer (content, model) {
    const completion = await openai.createChatCompletion({
      model: model,
      messages: [{ role: "user", content: content}],
    });
    return completion.data.choices[0].message.content;
}

async function massScripting(contents , GPTmodel,title){
    for(let i = 0; i < contents.length; i++){
        let data = await writer(contents[i],GPTmodel);
        var p = await CreateAssetsPath(title);
        fs.writeFileSync(__dirname + "/../Assets/"+title+ "/"+contents[i]+".txt",data);
    }
}

module.exports = massScripting;