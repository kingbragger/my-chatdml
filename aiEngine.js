const { OpenAI } = require('openai-api');
const openai = new OpenAI('YOUR_API_KEY');

async function getAIResponse(prompt) {
  const response = await openai.complete({
    engine: 'davinci-codex',
    prompt: prompt,
    maxTokens: 150,
  });
  return response.data.choices[0].text;
}

module.exports = getAIResponse;
