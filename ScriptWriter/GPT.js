const { get } = require("http");
const ENV = require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.GPTKEY,
});

const openai = new OpenAIApi(configuration);

module.exports = openai