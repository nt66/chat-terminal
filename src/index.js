import OpenAI from 'openai';
import dotenv from "dotenv";
import readLineSync from "readline-sync";
import  Color  from 'colors';

dotenv.config();

const messages = []
// const question =  readLineSync.question("我:");
// console.log(question)
const openai = new OpenAI({
  baseURL:process.env.OPENAI_BASE_URL,
  apiKey: process.envOPENAI_API_KEY
});

while(true){
  const userInput =  readLineSync.question(Color.bold.red("我:"));
  if(userInput ===  'exit'){
    process.exit()
  }
  messages.push({ role:'user',content:userInput})
  const chatCompletion = await openai.chat.completions.create({
    messages, // [{ role: "user", content: userInput }],
    model: "gpt-3.5-turbo",
  });
  // console.log(chatCompletion.choices);
  const gptResponse = chatCompletion.choices[0].message.content
  console.log(Color.bold.blue("GPT:"), gptResponse);  
  messages.push({
    role:'assistant',
    content:gptResponse
  })
}



// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });

//   console.log(completion.choices);
// }

// main();