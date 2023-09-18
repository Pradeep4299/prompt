import express from "express";
import OpenAI from "openai";
import { config } from "dotenv";
import { CodeEngine } from "prompt-engine";
import chalk from "chalk";
config();
const app = express();
app.use(express.json());

//openai object
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});
app.get("/customer-behavior/v1", async (req, res) => {
  //Takes more tokens //
  const { firstName, lastName, city, country, orderHistory } = req.body;
  const messages = [
    {
      role: "system",
      content: `You are a Data Analyst and you need to generate a customer overview and product preference analysis based on the information given in user role content. After thoroughly studying the details, first identify what category of products the customer had bought based on the order history and give me suggestions for targeted advertisement or promotions that would appeal to the customer's likings. Notes:Ensure that generated content is informative and don't use the same products in the response, find relevant products and give the response in one paragraph and stick to format given as content in assistant role content.keep in mind : The generated content must contain a "Overall" paragraph at the end showing the customer name, customer city, and the category of products he is interested in so that it can be given as an input to AI model to generate some content.`,
    },
    {
      role: "user",
      content: `Generate a customer behavior for Customer Name: ${firstName} ${lastName}, Region: ${city} ${country},Order History:${JSON.stringify(
        orderHistory
      )}`,
    },
    {
      role: "assistant",
      content: `customer John Doe, he is interested in high value products such as diamond necklace which comes under category jewelry and products under fashion category as he bought ZARA shirts. 
     So John is more interested in jewelry and fashion categories. it would be appropriate to suggest fashion related promotions such as T-shirts, Tops, and jewelry related promotion content such as bracelets, necklace which will be more appropriate. 
      Overall ,John Doe lives in europe and is more interested in high value and high quality jewelry and fashion products `,
    },
  ];
  console.log(chalk.yellow(JSON.stringify(messages)));
  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
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

app.get("/customer-behavior/v2", async (req, res) => {
  //“Included a line in prompt making the AI to read and understand the title property and give a tailored response” //
  const { firstName, lastName, city, country, orderHistory } = req.body;
  const messages = [
    {
      role: "system",
      content: `You are a Data Analyst, and you need to generate a customer overview and product preference analysis based on the information given in "user" role content. After thoroughly studying the details, first, identify what category of products the customer had bought by reading the "title" property and give me suggestions for targeted advertisements or promotions that would appeal to the customer's likings. 
       Note: Ensure that generated content is informative and don't use the same products in the response, suggest relevant products and give the response in one paragraph and stick to the format given in "assistant" role content.  
      Keep in mind: The generated content must contain an "Overall" paragraph at the end highlighting the customer's name, region, and the category of products that he is interested in so that it can be given as input to the AI model to generate some content`,
    },
    {
      role: "user",
      content: `Generate a customer behavior for Customer Name: ${firstName} ${lastName}, Region: ${city} ${country},Order History:${JSON.stringify(
        orderHistory
      )}`,
    },
    {
      role: "assistant",
      content: `Customer John Doe is interested in high-end items like diamond necklaces, which fall within the jewelry category, and fashion items because he purchased ZARA shirts. 
      John is therefore more drawn to the areas of jewelry and fashion. It would be more acceptable to recommend jewelry-related promotion content, such as bracelets and necklaces, as well as fashion-related promos like T-shirts and tops. 
      John Doe, who resides in Europe, prefers to purchase expensive, high-quality jewelry and clothing`,
    },
  ];
  console.log(chalk.yellow(JSON.stringify(messages)));
  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
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

app.get("/customer-behavior/", async (req, res) => {
  const { firstName, lastName, city, country, orderHistory } = req.body;
  const messages = [
    {
      role: "system",
      content: `You are a Data Analyst, you need to generate a customer overview and product preference analysis based on the information given in "user" role content. After thoroughly studying the details, first, identify what category of products the customer had bought by reading the "title" property and give me suggestions for targeted advertisements or promotions that would appeal to the customer's likings. Note: Ensure that generated content is informative and don't use the same products in the response, suggest relevant products and give the response in one paragraph and stick to the format given in "assistant" role content. Keep in mind: The generated content must contain an "Overall" paragraph at the end highlighting the customer's name, region, and the category of products that he is interested in so that it can be given as input to the AI model to generate content for marketing campaigns.
        `,
    },
    {
      role: "user",
      content: `Generate a customer behavior for Customer Name: ${firstName} ${lastName}, Region: ${city} ${country},Order History:${JSON.stringify(
        orderHistory
      )}`,
    },
    {
      role: "assistant",
      content: `Customer John Doe is interested in high-end items like diamond necklaces, which fall within the jewelry category, and fashion items because he purchased ZARA shirts.
        
        John is therefore more drawn to the areas of jewelry and fashion. It would be more acceptable to recommend jewelry-related promotion content, such as bracelets and necklaces, as well as fashion-related promos like T-shirts and tops.
        
         John Doe, who resides in Europe, prefers to purchase expensive, high-quality jewelry and clothing.
        `,
    },
  ];
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

app.get("/product-offering/v1", async (req, res) => {
  const { shopDomain, shopName, products } = req.body;

  const messages = [
    {
      role: "system",
      content: `You are a Professional Marketing Analyst who reads the shop name,shop website, and list of products and analyses the products details which includes title and description given to you in "user" role content and generate me a shop promotion which should be more appetizing and appealing to the customers. Note: 1.You need to stick to the response format of the content given in "assistant" role and should not  exceed the format. 2. At last mention the shop name , shop website and the overall product review so that it can be given to an AI model to generate some marketing content `,
    },
    {
      role: "user",
      content: `Generate a shop overview for Shop Name:${shopName} Shop Domain:${shopDomain} Products:${JSON.stringify(
        products
      )}`,
    },
    {
      role: "assistant",
      content: `Discover the ultimate gaming and tech essentials at Tagbot Shop! Elevate your gaming experience with premium Headsets, Mouse, Keyboard, and Accessories. Whether you're a pro gamer or tech enthusiast, find precision, comfort, and style, all in one place. Explore our high-quality products and unbeatable deals at www.tagbot.com. Upgrade your gear, upgrade your game visit us today!`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
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

app.get("/product-offering/v2", async (req, res) => {
  //“Optimized prompt and token used is reduced to 500” //
  const { shopDomain, shopName, products } = req.body;

  const messages = [
    {
      role: "system",
      content: `You're a Marketing Analyst tasked with enhancing shop promotion. You analyze shop details and products info in the "user" role to create an appealing promotion. Include shop name, website, and product review for further content generation. Note:Ensure that generated content is informative and is in one paragraph and don't use the products info in the response. Stick to the format given in "assistant" role content `,
    },
    {
      role: "user",
      content: `Generate a shop overview for Shop Name:${shopName} Shop Domain:${shopDomain} Products:${JSON.stringify(
        products
      )}`,
    },
    {
      role: "assistant",
      content: `Discover the ultimate gaming and tech essentials at Tagbot Shop! Elevate your gaming experience with premium Headsets, Mouse, Keyboard, and Accessories. Whether you're a pro gamer or tech enthusiast, find precision, comfort, and style, all in one place. Explore our high-quality products and unbeatable deals at www.tagbot.com. Upgrade your gear, upgrade your game visit us today!`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
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

app.get("/product-offering/v3", async (req, res) => {
  //“Using different AI model” //
  const { shopDomain, shopName, products } = req.body;

  const messages = [
    {
      role: "system",
      content: `You're a Marketing Analyst tasked with enhancing shop promotion. You analyze shop details and products info in the "user" role to create an appealing promotion. Include shop name, website, and product review for further content generation. Note:Ensure that generated content is informative and is in one paragraph and don't use the products info in the response. Stick to the format given in "assistant" role content `,
    },
    {
      role: "user",
      content: `Generate a shop overview for Shop Name:${shopName} Shop Domain:${shopDomain} Products:${JSON.stringify(
        products
      )}`,
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

app.get("/product-offering/v4", async (req, res) => {
  const { shopDomain, shopName, products } = req.body;

  const messages = [
    {
      role: "system",
      content: `You're a Marketing Analyst tasked with enhancing shop promotion. You need to thoroughly understand the details given in the "user" role content and generate a product marketing message. Include shop name, website, and product review for further content generation. Note:Ensure that generated content is informative and is in one paragraph and don't use the below mentioned product details. Stick to the format given in "assistant" role content `,
    },
    {
      role: "user",
      content: `Generate a shop overview for Shop Name:${shopName} Shop Domain:${shopDomain} Products:${JSON.stringify(
        products
      )}`,
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

app.get("/product-offering/v5", async (req, res) => {
  //Optimized user content//
  const { shopDomain, shopName, products } = req.body;

  const messages = [
    {
      role: "system",
      content: `You're a Marketing Analyst tasked with enhancing shop promotion. You analyze shop details and products info in the "user" role to create an appealing promotion. Include shop name, website, and relevant products suitable for the shop, for further content generation. Note:Ensure that generated content is informative and is in one paragraph and don't use the products info in the response. Stick to the format given in "assistant" role content`,
    },
    {
      role: "user",
      content: `Generate a marketing message for Shop Name:${shopName} Shop Domain:${shopDomain} Products:${JSON.stringify(
        products
      )} and don't directly use the products info in the response`,
    },
    {
      role: "assistant",
      content: `Discover the ultimate gaming and tech essentials at Tagbot Shop! Elevate your gaming experience with premium Headsets, Mouse, Keyboard, and Accessories.Whether you're a pro gamer or tech enthusiast, find precision, comfort, and style, all in one place. Explore our high-quality products and unbeatable deals at www.tagbot.com. Upgrade your gear, upgrade your game visit us today!`,
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

app.get("/email-generation/v1", async (req, res) => {
  //More tokens are used, need to optimize//
  const {
    contextForEmail,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As an Email Marketing Software Service, your task is to generate an email based on the following details for my Personalized Email Marketing Campaign to my shop customers. The email tone should be more Humorous and appealing for my customers.Add the context for email and customer name given in the subject field. Notes: Do not add any promo codes by yourself, if i provide any promo code, highlight that code in the email context, keep the email short upto 900 words and the response should be in the same format of \"assistant\" role content`,
    },
    {
      role: "user",
      content: `Generate a marketing email for Customer Name: ${first_name} ${last_name} for ${contextForEmail}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} Coupon:${
        coupon ? `${coupon}` : `No Coupons`
      }  the email format should be in JSON object with \"subject\" property, which should include \"Diwali Sale\" and \"Customer name\" in it, and \"body\" property which should have the email context`,
    },
    {
      role: "assistant",
      content: `{"subject": "Big Diwali Sale for Pradeep Kumar",    

      "body": "Hello Pradeep Kumar,Wishing you a Happy Diwali as bright as your gaming skills! We couldn't help but notice your fantastic taste in gaming accessories and electronics. With a shopping history that includes the Logitech G402 Gaming mouse, Redragon Keyboard, JBL headsets, and Creative Bass speakers, you're clearly a gaming aficionado! .This Diwali, we have some electrifying news for you. To make your gaming experience even more thrilling, we're offering a 15% discount on all keyboards. Just use the code: DIWALI15 at checkout to claim your savings. But that's not all! Our shop is a treasure trove of gaming goodness. Here are some more items we think you'll love. Corsair Gaming Mouse: For precise control in every game. 2. Logitech Keyboard with RGB red switch: A keyboard that matches your gaming intensity. 3. Red Gear Gaming Headset: Immerse yourself in stunning surround sound. 4. NVME SSD: Speed up your gaming with lightning-fast storage.5. Cooler Master Aircooler: Keep your CPU chill and your gaming hot! These are just a taste of what we have to offer. Visit our website at www.tagbot.myshopify.com to explore our full range of products and take your gaming to the next level. From Paris, Europe, to wherever your gaming adventures take you, we've got your back. So, don't miss out on this Diwali deal and upgrade your gaming setup today! Wishing you a joyful Diwali filled with wins, power-ups, and high scores! Warm regards,Tagbot Gaming Shop"  } `,
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

app.get("/email-generation/v2", async (req, res) => {
  //Changed model ah changed some prompt and reduced response token//
  const {
    contextForEmail,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As an Email Marketing Software Service, Your objective is to create an email for my personalized email marketing campaign to the customers of my shop based on the below prompt. For my consumers, the email should have a friendlier and more humorous tone.Include the email's subject line's client name and context. Keep the email brief (up to 900 words) and respond in the same way as in "assistant" role content. Do not include any promo codes on your own. If I offer a discount code, please highlight it in the email context in bold letters.`,
    },
    {
      role: "user",
      content: `Generate a marketing email for Customer Name: ${first_name} ${last_name} for ${contextForEmail}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} Coupon:${
        coupon ? `${coupon}` : `No Coupons`
      } Shop Website: ${shopDomain} Shop name: ${shop_name} Do not include any other coupon code other than the provided one and the email format should be in JSON object with "subject" property, which should include "Diwali Sale" and "Customer name" in it, and "body" property which should have the email context Note: In the end include the shop name and website`,
    },
    {
      role: "assistant",
      content: `{ 

        "subject": "Big Diwali Sale for Pradeep Kumar", 

        "body": "Hello Pradeep Kumar,Wishing you a Happy Diwali as bright as your gaming skills! We couldn't help but notice your fantastic taste in gaming accessories and electronics. From your shopping history you're clearly a gaming aficionado! . This Diwali, we have some electrifying news for you. But that's not all! Our shop is a treasure trove of gaming goodness. Here are some more items we think you'll love. 1. Corsair Gaming Mouse: For precise control in every game.2. Logitech Keyboard with RGB red switch: A keyboard that matches your gaming intensity. 3. Red Gear Gaming Headset: Immerse yourself in stunning surround sound.4. NVME SSD: Speed up your gaming with lightning-fast storage.5. Cooler Master Aircooler: Keep your CPU chill and your gaming hot! These are just a taste of what we have to offer. Visit our website at www.tagbot.myshopify.com to explore our full range of products and take your gaming to the next level. Wishing you a joyful Diwali filled with wins, power-ups, and high scores! Warm regards,Tagbot Gaming Shop" 

      } `,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
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

app.get("/email-generation/v3", async (req, res) => {
  //changed back to 16k model and changed some user content//
  const {
    contextForEmail,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As an Email Marketing Software Service, Your objective is to create an email for my personalized email marketing campaign to the customers of my shop based on the below prompt. For my consumers, the email should have a friendlier and more humorous tone.Include the email's subject line's client name and context. Keep the email body short not more than 400 words and respond in the same format as in "assistant" role content. Do not include any promo codes on your own. If I offer a discount code, please highlight it in the email context in bold letters.Remember not to you any SPAM words in subject or body`,
    },
    {
      role: "user",
      content: `Generate a marketing email for Customer Name: ${first_name} ${last_name} for ${contextForEmail}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} Coupon:${
        coupon ? `${coupon}` : `No Coupons`
      } Shop Website: ${shopDomain} Shop name: ${shop_name}The email format should be in JSON object with "subject" property, which should include "Diwali Sale" and shop website (make it as hyperlink) and "Customer name" in it, and "body" property which should have the email context. NoteS: In the end include the shop name`,
    },
    {
      role: "assistant",
      content: `{ 

        "subject": "Black Friday sale for Pradeep Kumar", 

        "body": "Hello Pradeep Kumar,Wishing you a Happy Diwali as bright as your gaming skills! We couldn't help but notice your fantastic taste in gaming accessories and electronics. From your shopping history you're clearly a gaming aficionado!.This Diwali, we have some electrifying news for you. But that's not all! Our shop is a treasure trove of gaming goodness. Here are some more items we think you'll love,1. Corsair Gaming Mouse: For precise control in every game.2. Logitech Keyboard with RGB red switch: A keyboard that matches your gaming intensity. 3. Red Gear Gaming Headset: Immerse yourself in stunning surround sound.4. NVME SSD: Speed up your gaming with lightning-fast storage. These are just a taste of what we have to offer. Visit our website at www.tagbot.myshopify.com to explore our full range of products and take your gaming to the next level. Wishing you a joyful Diwali filled with wins, power-ups, and high scores! Warm regards,Tagbot Gaming Shop" 

      } `,
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
      content: `As an Email Marketing Software Service, Your objective is to create an email for my personalized email marketing campaign to the customers of my shop based on the below prompt.The email should be in the below mentioned tone.Include the email's subject line's client name and context. Keep the email body short not to exceed the given number of words and respond in the same format as in "assistant" role content. Do not include any promo codes on your own. If I offer a discount code, please highlight it in the email context in bold letters.Remember not to use any SPAM words in subject or body`,
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
    role: completion.choices[0].message.role,
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

app.get('/finetune-job-creation',async (req,res)=>{

  //create and upload the file
  const response = await openai.files.create({ file: fs.createReadStream('fineTune.jsonl'), purpose: 'fine-tune' });
  const fileId = response.id;

  //looping and waiting until the file gets uploaded
  while (true) {
    const info = await openai.files.retrieve(fileId);
    const status = info.status;
    if (status == 'uploaded') {
      console.log("status: ",status);
      await sleep(10000);
      continue; // sleep for 10 seconds
    } else if (status == 'processed') {
      console.log("status: ",status);
      console.log("File uploaded successfully");
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
    console.log("creating Job");
    const fineTune = await openai.fineTuning.jobs.create({
  training_file: fileId,
  model: 'gpt-3.5-turbo-0613'
  });

  const fineTuneJob = await openai.fineTuning.jobs.retrieve(fineTune.id);
  console.log("full job: ",fineTuneJob); // see if the status is succeeded, or else wait for some time so that it will get changed and it will give u the trained model name.
while(true){
  if(fineTuneJob.fine_tuned_model || fineTuneJob.status == 'succeeded'){
    console.log("custom model is ready to use");
    break;
  }
  console.log("custom model status: ",fineTuneJob.status);
  console.log("waiting for custom model to get created");
  await sleep(10000);
  continue;
}
  console.log("fine tuned model name : ", fineTuneJob.fine_tuned_model);
  res.json({status:"Successfully created a job",fileId,jobId:fineTune.id, fineTuneJob})
})

app.get('/finetune-status',async (req,res)=>{
  const {jobId}=req.query;
  const fineTuneJob = await openai.fineTuning.jobs.retrieve(jobId);
  console.log("full job: ",fineTuneJob);
  res.json({jobId, fineTuneJob})
})

app.get("/finetune-customer-behavior-generation", async (req, res) => {
  const { firstName, lastName, city, country, orderHistory } = req.body;

  let fileId=process.env.FINE_TUNE_CUSTOMER_BEHAVIOR_FILE_ID
  let fineTune=process.env.FINE_TUNE_CUSTOMER_BEHAVIOR_JOB_ID
 
  const fineTuneJob = await openai.fineTuning.jobs.retrieve(fineTune);
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

app.get("/finetune-email-generation", async (req, res) => {
  const { firstName, lastName, city, country, orderHistory } = req.body;

  let fileId=process.env.FINE_TUNE_CUSTOMER_BEHAVIOR_FILE_ID
  let fineTune=process.env.FINE_TUNE_CUSTOMER_BEHAVIOR_JOB_ID
 
  const fineTuneJob = await openai.fineTuning.jobs.retrieve(fineTune);
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

























// app.get("/promptengine", async (req, res) => {
//   const { firstName, lastName, orders } = req.query;
//   const description = `Generate a customer profile for ${firstName} ${lastName} including  about their behavior based on order history${orders}`;
//   const examples = [
//     {
//       input: `Customer name: ${firstName} ${lastName}. 
//             orderHistory:${orders}
//           `,
//       response: `${firstName} ${lastName} is a most valuable customer who buys ${orders} more frequently and his interest lies in the area of interest`,
//     },
//   ];

//   const codeEngine = new CodeEngine(description, examples, "", {
//     modelConfig: { maxTokens: 10000 },
//   });

//   const query = `Customer name: ${firstName} ${lastName}. 
//             orderHistory:${orders}
//           `;
//   const prompt = codeEngine.buildPrompt(query);

//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a data analyst providing insights on customer behavior.",
//       },
//       {
//         role: "user",
//         content: prompt,
//       },
//     ],
//     model: "gpt-3.5-turbo",
//   });

//   res.send(completion.choices[0].message.content);
// });

