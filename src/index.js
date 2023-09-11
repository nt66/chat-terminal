import OpenAI from 'openai';
import dotenv from "dotenv";
import readLineSync from "readline-sync";
import  Color  from 'colors';
import Ora from 'ora';

dotenv.config();

const messages = []
const spin = Ora('replying..')
// const question =  readLineSync.question("我:");
// console.log(question)
const openai = new OpenAI({
  baseURL:process.env.OPENAI_BASE_URL,
  apiKey: process.envOPENAI_API_KEY
});

while(true){
  const userInput =  readLineSync.question(Color.bold.red("我:"));
  // 退出
  if( userInput.toLowerCase() ===  'exit'){
    process.exit()
  }
  spin.start()
  messages.push({ role:'user',content:userInput})
  const chatCompletion = await openai.chat.completions.create({
    messages, // [{ role: "user", content: userInput }],
    model: "gpt-3.5-turbo",
    // stream: true,
  });
  // console.log(chatCompletion.choices);
  const gptResponse = chatCompletion.choices[0].message.content
  spin.stop()
  console.log(Color.bold.blue("GPT:"), gptResponse);  
  messages.push({
    role:'assistant',
    content:gptResponse
  })
}
