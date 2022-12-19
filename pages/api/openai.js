import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.OPEN_AI_API_KEY

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const JsAi = async (question) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `*/ ${question}: */`,
      temperature: 0,
      max_tokens: 256,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return completion.data.choices[0];
  } catch (err) {
    return err;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    req.body.text === "" 
    ? res.json(await JsAi("how are you doing"))
    : res.json(await JsAi(req.body.text))
  }
}
