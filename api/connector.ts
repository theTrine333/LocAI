import OpenAI from "openai";

const baseURL = "https://api.aimlapi.com/v1";
// const baseURL = "https://api.aimlapi.com/chat/completions";
const apiKey = "6a420d4fd62e4143ab62b9384ce4ae17";
// const userPrompt = "What kind of model are you?";

const api = new OpenAI({
  apiKey,
  baseURL,
});

export const main = async (userPrompt: string) => {
  const completion = await api.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: userPrompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 256,
  });
  const response = completion.choices[0].message.content;
  return response;
};

// main();
