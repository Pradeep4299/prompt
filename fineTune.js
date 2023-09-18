import express from "express";
import OpenAI from "openai";
import { config } from "dotenv";
import chalk from "chalk";
import fs from 'fs';
import cors from 'cors';
config();
const app = express();
app.use(express.json());
app.use(cors())
//openai object
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

app.get('/finetune',async (req,res)=>{

  //create and upload the file
  const response = await openai.files.create({ file: fs.createReadStream('fineTune.jsonl'), purpose: 'fine-tune' });
  const fileId = response.id;

  //looping and waiting until the file gets uploaded
  while (true) {
    const info = await openai.files.retrieve(fileId);
    const status = info.status;
    if (status == 'uploaded') {
      await sleep(10000);
      continue; // sleep for 10 seconds
    } else if (status == 'processed') {
      console.log("status: ",status);
      break;
    } else if (status == 'failed') {
    console.log('The file failed to process.');
    break;
    }
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    //creating the job which will be the custom trained model
    const fineTune = await openai.fineTuning.jobs.create({
  training_file: fileId,
  model: 'gpt-3.5-turbo-0613'
  });

  const fineTuneJob = await openai.fineTuning.jobs.retrieve(fineTune.id);
  console.log("full job: ",fineTuneJob);

  console.log("fine tuned model name : ", fineTuneJob.fine_tuned_model);
  res.json({fileId, fineTuneJob})
})

app.get("/test", async (req, res) => {
  const { firstName, lastName, city, country, orderHistory } = req.body;
  let fileId=process.env.FINE_TUNE_CUSTOMER_BEHAVIOR_FILE_ID
  console.log("fileId: ",fileId);
  let fineTune=process.env.FINE_TUNE_CUSTOMER_BEHAVIOR_JOB_ID
  console.log("job: ",fineTune);
  console.log(fineTune , typeof(fineTune));
  const fineTuneJob = await openai.fineTuning.jobs.retrieve(fineTune);
  console.log("full job: ",fineTuneJob);
 
  let messages= [{ role: "user", content: `Generate a customer behavior for Customer Name: ${firstName} ${lastName}, Region: ${city} ${country},Order History:${JSON.stringify(
    orderHistory
  )}` }]
  const completion = await openai.chat.completions.create({
    messages,
    model: process.env.FINE_TUNE_CUSTOMER_FINE_TUNED_MODEL,
  });
  
  console.log(chalk.yellow(JSON.stringify(messages)));
  const result = {
    role: completion.choices[0].message.role,
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };
  console.log(chalk.red(JSON.stringify(result)));
  res.send(result);
});




app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
