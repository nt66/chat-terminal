import OpenAI from 'openai';
import dotenv from "dotenv"

dotenv.config();

const openai = new OpenAI({
  baseURL:process.env.OPENAI_BASE_URL,
  apiKey: process.envOPENAI_API_KEY
});


const chatCompletion = await openai.chat.completions.create({
  messages: [{ role: "user", content: "你好啊,你是谁" }],
  model: "gpt-3.5-turbo",
});

console.log(chatCompletion.choices);



// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });

//   console.log(completion.choices);
// }

// main();