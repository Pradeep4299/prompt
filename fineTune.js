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

app.get("/customer-behavior/", async (req, res) => {
  const { firstName, lastName, city, country, orderHistory } = req.body;

  const response=await openai.files.create({ file: fs.createReadStream('customer.json'), purpose: 'fine-tune' });


  const fineTune = await openai.fineTunes.create({ training_file: 'file-abc123', model: 'gpt-3.5-turbo-0618' })

  
  console.log(chalk.yellow(JSON.stringify(messages)));
  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-16k-0613",
  });
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



app.get("/product-offering", async (req, res) => {
  //added context based content generation//
  const { shopDomain, shopName, products, context } = req.body;

  const messages = [
    {
      role: "system",
      content: `As a Marketing Analyst,your task is to generate a shop overview by analyzing shop details and products info provided in the prompt below. Mention shop name, website,category of products available in the shop and generate a response which will later be given to an AI model in a single paragraph format. Notes:Ensure that generated content is informative and keep the content short by not explaining about the product description. Stick to the format given in "assistant" role content and add the given "context" in the response `,
    },
    {
      role: "user",
      content: `Generate a shop overview for Shop Name:${shopName} Shop Domain:${shopDomain} Products:${JSON.stringify(
        products
      )} Context : ${context}`,
    },
    {
      role: "assistant",
      content: `Discover the ultimate gaming and tech essentials at Tagbot Shop! Elevate your gaming experience with premium Headsets, Mouse, Keyboard, and Accessories. Whether you're a pro gamer or tech enthusiast, find precision, comfort, and style, all in one place. Explore our high-quality products and unbeatable deals at www.tagbot.com. Upgrade your gear, upgrade your game visit us today!`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-16k-0613",
  });
  const result = {
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  res.send(result);
  console.log(chalk.red(JSON.stringify(messages)));
  console.log(chalk.green(JSON.stringify(result)));
});



app.get("/email-generation", async (req, res) => {
  //configured with the tone, length and keywords fields//
  const {
    contextForEmail,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
    tone,
    length,
    keywords,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As an Email Marketing Software Service, Your objective is to create an email for my personalized email marketing campaign to the customers of my shop based on the below prompt.The email should be in the below mentioned tone.Include the email's subject line's client name and context. Keep the email body short not more than ${length} words and respond in the same format as in "assistant" role content. Do not include any promo codes on your own. If I offer a discount code, please highlight it in the email context in bold letters.Remember not to use any SPAM words in subject or body`,
    },
    {
      role: "user",
      content: `Generate a marketing email based on the ${tone} tone for Customer Name: ${first_name} ${last_name} for ${contextForEmail}, Customer Description: ${customer_behavior} and Shop Description: ${product_offering} ${coupon ? `Coupon Code : ${coupon}` : ``} Shop Website: ${shopDomain} Shop name: ${shop_name}.The email format should be in JSON object with "Subject" should include what the campaign is about and "shop name" and "Customer name" in it, and "body" should have the email context with these keywords : ${keywords} and the products list from shop description. Notes: In the end include the shop name and do not exceed ${length} words in the email context`,
    },
    {
      role: "assistant",
      content: `{"subject": "Black Friday sale for Pradeep Kumar","body": "Hello Pradeep Kumar,Wishing you a Happy Diwali as bright as your gaming skills! We couldn't help but notice your fantastic taste in gaming accessories and electronics. From your shopping history you're clearly a gaming aficionado!. 
        This Diwali, we have some electrifying news for you. But that's not all! Our shop is a treasure trove of gaming goodness. Here are some more items we think you'll love,
        1. Corsair Gaming Mouse: For precise control in every game.
        2. Logitech Keyboard with RGB red switch: A keyboard that matches your gaming intensity. 
        3. Red Gear Gaming Headset: Immerse yourself in stunning surround sound.
        4. NVME SSD: Speed up your gaming with lightning-fast storage.
        These are just a taste of what we have to offer. Visit our website at www.tagbot.myshopify.com to explore our full range of products and take your gaming to the next level. Wishing you a joyful Diwali filled with wins, power-ups, and high scores! 
        Warm regards,
        Tagbot Gaming Shop"
        }`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-0613",
  });
  const result = {
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  res.send(result);
  console.log(chalk.red(JSON.stringify(messages)));
  console.log(chalk.green(JSON.stringify(result)));
});

app.get("/whatsapp-message", async (req, res) => {
  const {
    contextForWhatsappMessage,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
    tone,
    keywords,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As an Advertising Copywriter, i need you to generate whatsapp marketing campaign for my customers based on the below prompt.The content should be in the below mentioned tone.Include the text's subject line's client name and context. Keep the content body short upto 50 words and give the response by taking "assistant" role content as an example and include emojis. Do not include any coupon code on your own. If I provide a coupon code, please highlight it in the context in bold letters. Remember not to use any SPAM words in subject or body`,
    },
    {
      role: "user",
      content: `Generate a marketing whatsapp message based on the ${tone} tone for Customer Name: ${first_name} ${last_name} for ${contextForWhatsappMessage}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} ${coupon ? `Coupon Code : ${coupon}` : ``} Shop Website: ${shopDomain} Shop name: ${shop_name}.The email format should be in JSON object with "greetings" property,"subject" property, which should include "${contextForWhatsappMessage}" and shop website and "Customer name" in it, and "body" property which should have the marketing context with these keywords : ${keywords}. Notes: In the end include the shop name ,strictly follow the size of the content and use only the products list provided`,
    },
    {
      role: "assistant",
      content: `{"greetings":"Hey Emma Mackey! 👋", "subject": "Halloween sale is here Emma Mackey" ,"body" : "🎮🔥 Tagbot Gaming Shop 🔥🎮
       
      With Halloweeen approaching, we have some exciting offers exclusively for you!
      We've curated an exclusive selection of gaming and electronics products tailored just for you:
      🖱️ Corsair Gaming Mouse: Dominate the virtual battlefield with precision and style.
      ⌨️ Logitech Keyboard with RGB Red Switch: Enjoy lightning-fast keystrokes and customizable RGB lighting.
      🎧 Red Gear Gaming Headset: Immerse yourself in a world of stunning audio, making every game come to life.
      💽 NVME SSD: Need more storage? Say goodbye to lag with blazing-fast data access.
      ❄️ Cooler Master Aircooler: Keep your CPU cool under pressure, ensuring smooth gameplay.
      
Explore these top-notch products at www.tagbot.myshopify.com and take your gaming experience to new heights!
Wherever you are in Europe, Tagbot Gaming Shop has you covered. Get ready to elevate your gaming! 🎮✨Happy gaming, Emma! 🚀
Best regards,
      Tagbot Gaming Shop Team" }`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-0613",
  });
  const result = {
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  res.send(result);
  console.log(chalk.red(JSON.stringify(messages)));
  console.log(chalk.green(JSON.stringify(result)));
});

app.get("/sms", async (req, res) => {
  const {
    contextForSMS,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
    tone,
    keywords,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As an Advertising Copywriter, i need you to generate marketing campaign message for my customers based on the below prompt.Include the text's subject line's client name and context. Keep the content body short upto 30 words and give the response by taking "assistant" role content as an example and include emojis. Do not include any coupon code on your own. If I provide a coupon code, please highlight it in the context in bold letters. Remember not to use any SPAM words in subject or body`,
    },
    {
      role: "user",
      content: `Generate a marketing text message based on the ${tone} tone for Customer Name: ${first_name} ${last_name} for ${contextForSMS}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} ${coupon ? ` Coupon: ${coupon}` : ``} Shop Website: ${shopDomain} Shop name: ${shop_name}.The email format should be in JSON object with "greetings" property,"subject" property, which should include "${contextForSMS}" and shop website and "Customer name" in it, and "body" property which should have the marketing context with these keywords : ${keywords}. Notes: In the end include the shop name ,strictly follow the size of the content and use only the products list provided`,
    },
    {
      role: "assistant",
      content: `{"greetings":"Hey Emma Mackey! 👋", "subject": "Halloween sale is here Emma Mackey" ,"body" : "🎮🔥 Tagbot Gaming Shop 🔥🎮
       
      With Halloweeen approaching, we have some exciting offers exclusively for you!
      We've curated an exclusive selection of gaming and electronics products tailored just for you:
      🖱️ Corsair Gaming Mouse: Dominate the virtual battlefield with precision and style.
      ⌨️ Logitech Keyboard with RGB Red Switch: Enjoy lightning-fast keystrokes and customizable RGB lighting.
      🎧 Red Gear Gaming Headset: Immerse yourself in a world of stunning audio, making every game come to life.
      💽 NVME SSD: Need more storage? Say goodbye to lag with blazing-fast data access.
      ❄️ Cooler Master Aircooler: Keep your CPU cool under pressure, ensuring smooth gameplay.
      Discover top-tier gaming products at www.tagbot.myshopify.com and level up your gaming experience across Europe with Tagbot Gaming Shop. Elevate your game!🎮✨Happy gaming, Emma! 🚀
      Best regards,
      Tagbot Gaming Shop Team" }`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-0613",
  });
  const result = {
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  res.send(result);
  console.log(chalk.red(JSON.stringify(messages)));
  console.log(chalk.green(JSON.stringify(result)));
});


app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
