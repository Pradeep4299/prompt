import OpenAI from "openai";
import { config } from "dotenv";

config();
const openai = new OpenAI({
  api_key: process.env.OPENAI_API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "Write a poem about cat",
      },
    ],
    stream: true,
  });
  //   console.log(completion.choices[0].message.content);
  for await (const part of completion) {
    console.log(part.choices[0].delta.content);
  }
}

main();
