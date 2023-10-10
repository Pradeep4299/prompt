import express from "express";
import OpenAI from "openai";
import { config } from "dotenv";
import chalk from "chalk";
import fs from "fs";
import { CodeEngine } from "prompt-engine";
config();
const app = express();
app.use(express.json());

//openai object
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

/*Customer super profile */
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
  const { firstName, lastName, city, country, pin, joinDate, orderHistory } =
    req.body;

  const numberOfOrders = orderHistory.length;
  let totalSpent = 0;

  for (const order of orderHistory) {
    totalSpent += order.price;
  }
  const AOV = Math.round(totalSpent / numberOfOrders);
  let messages;
  if (orderHistory.length < 10) {
    messages = [
      {
        role: "system",
        content: `As a data analyst, it is your responsibility to provide an overview of the customer and a study of their product preferences using the data from the \"user\" role content. Give me recommendations for targeted marketing or promotions that will appeal to the customer's preferences after carefully examining the facts. To start, determine what products the customer had purchased by reading the "title" property. Note: Make sure the information you create is helpful, propose products that are relevant, keep your response to one paragraph in 60 words, and follow the structure specified in the content for the "assistant" job and do not provide product description. Remember: In order for the created material to be used as input by the AI model to generate content for marketing campaigns, it must include a \"Overall\" paragraph at the end that highlights the customer's name, region, and the category of items that he is interested in.`,
      },
      {
        role: "user",
        content: `Generate a customer behavior for Customer Name: ${firstName} ${lastName}, Region: ${city} ${country}, ZIP:${pin}, Joining Date:${joinDate
          .toLocaleString()
          .slice(0, 10)},Order History:${JSON.stringify(
          orderHistory
        )} Total Spent:$${totalSpent}, Number of Orders:${numberOfOrders}, Average Order Value:$${AOV}`,
      },
      {
        role: "assistant",
        content: `Customer John Doe is interested in high-end items like KZ diamond necklace and Gold ring, which fall within the jewelry category, and fashion items because he purchased ZARA shirts, Nike T-shirts.John is therefore more drawn to the areas of jewelry and fashion. It would be more acceptable to recommend jewelry-related promotion content, such as bracelets and necklaces, as well as fashion-related promos like T-shirts and tops.Overall,John Doe resides in Europe, prefers to purchase expensive, high-quality jewelry and clothing.`,
      },
    ];
  } else {
    messages = [
      {
        role: "system",
        content: `As a data analyst, it is your responsibility to provide an overview of the customer and a study of their product preferences using the data from the \"user\" role content. Give me recommendations for targeted marketing or promotions that will appeal to the customer's preferences after carefully examining the data. To start, determine what category of items the consumer had purchased by reading the "title" property. Note: Make sure the information you create is helpful, propose products that are relevant, keep your response to one paragraph in 60 words, and follow the structure specified in the content for the "assistant" job and do not provide product name and description. Remember: In order for the created material to be used as input by the AI model to generate content for marketing campaigns, it must include a \"Overall\" paragraph at the end that highlights the customer's name, region, and the category of items that he is interested in.`,
      },
      {
        role: "user",
        content: `Generate a customer behavior for Customer Name: ${firstName} ${lastName}, Region: ${city} ${country}, ZIP:${pin}, Joining Date:${joinDate
          .toLocaleString()
          .slice(0, 10)},Order History:${JSON.stringify(
          orderHistory
        )} Total Spent:$${totalSpent}, Number of Orders:${numberOfOrders}, Average Order Value:$${AOV}`,
      },
      {
        role: "assistant",
        content: `Customer John Doe is interested in high-end items like diamond necklaces, which fall within the jewelry category, and fashion items because he purchased shirts, jeans, and joggers.John is therefore more drawn to the areas of jewelry and fashion. It would be more acceptable to recommend jewelry-related promotion content, such as bracelets and necklaces, as well as fashion-related promos like T-shirts and tops.Overall,John Doe resides in Europe, prefers to purchase expensive, high-quality jewelry and clothing.`,
      },
    ];
  }

  console.log(chalk.yellow(JSON.stringify(messages)));
  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-16k-0613",
    temperature: 0.5,
  });
  const response = {
    role: completion.choices[0].message.role,
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  const result = [
    messages[0],
    messages[1],
    { role: response.role, content: response.content },
  ];
  console.log(chalk.red(JSON.stringify(result)));
  res.send(response);
});

//shop super profile
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
  const { shopDomain, shopName, products, orders } = req.body;
  const numberOfProducts = orders.length;
  let totalRevenue = 0;

  for (const order of orders) {
    totalRevenue += order.total_price;
  }
  const AOV = Math.round(totalRevenue / numberOfProducts);
  let messages;
  if (products.length < 10) {
    messages = [
      {
        role: "system",
        content: `As a Marketing Analyst,your task is to generate a shop overview by analyzing shop details and Products info provided in the prompt below. Mention shop name, website, products available in the shop, Total Revenue, Average Order Value and generate a response which will later be given to an AI model in a single paragraph format. Notes:Ensure that generated content is informative and keep the content short upto 90 words by not explaining the product description. Stick to the format given in "assistant" role content `,
      },
      {
        role: "user",
        content: `Generate a shop overview for Shop Name:${shopName} Shop Domain:${shopDomain} Products:${JSON.stringify(
          products
        )} Total Revenue:${totalRevenue}  Average Order :${AOV}`,
      },
      {
        role: "assistant",
        content: `Tag bot gaming shop provides Gaming PC - Titan X1, Mechanical Gaming Keyboard - HyperStrike, Gaming Monitor - QuantumPro X27, Console Gaming Controller - ProPad 2023, Wireless Gaming Headset - SoundWave 7.1 and Virtual Reality Kit - VRX1. Visit at www.tagbot.myshopify.com . Total revenue of the shop is $4450 and the average order value is $750`,
      },
    ];
  } else {
    messages = [
      {
        role: "system",
        content: `As a Marketing Analyst,your task is to generate a shop overview by analyzing shop details and Products info provided in the prompt below and . Mention shop name, website, categories of the products available in the shop, Total Revenue, Average Order Value and generate a response which will later be given to an AI model in a single paragraph format. Notes:Ensure that generated content is informative and keep the content short upto 90 words by not explaining the product description and not including the product title. Stick to the format given in "assistant" role content `,
      },
      {
        role: "user",
        content: `Generate a shop overview for Shop Name:${shopName} Shop Domain:${shopDomain} Products:${JSON.stringify(
          products
        )} Total Revenue:${totalRevenue}  Average Order :${AOV}`,
      },
      {
        role: "assistant",
        content: `Tag bot gaming shop provides Gaming PCs, Gaming Keyboards , Monitors, Gaming Controllers, Wireless Headsets. Visit at www.tagbot.myshopify.com. Total revenue of the shop is $4450 and the average order value is $750`,
      },
    ];
  }

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-16k-0613",
    temperature: 0.1,
  });
  const response = {
    role: completion.choices[0].message.role,
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  const result = [
    messages[0],
    messages[1],
    { role: response.role, content: response.content },
  ];
  console.log(chalk.red(JSON.stringify(result)));
  res.send(response);
});

app.get("/email-generation/v1", async (req, res) => {
  //More tokens are used, need to optimize//
  const {
    context,
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
      content: `Generate a marketing email for Customer Name: ${first_name} ${last_name} for ${context}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} Coupon:${
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
    context,
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
      content: `Generate a marketing email for Customer Name: ${first_name} ${last_name} for ${context}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} Coupon:${
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
    context,
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
      content: `Generate a marketing email for Customer Name: ${first_name} ${last_name} for ${context}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} Coupon:${
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
    context,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
    tone,
    keywords,
    target_audience,
    event_name,
    event_date,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As a Marketing manager, your goal is to craft an email  for my personalized email marketing campaign to my shop's customers based on the prompt below. The email should adopt the tone and the targeted audience described below. Keep the email body concise not more than 80 words and please respond in the same format as the 'assistant' role content but as per the tone and the targeted audience mentioned in the prompt. Do not provide any coupon or promo codes on your own. If a coupon code is provided in the prompt,emphasize it in the email content using bold letters. Remember to avoid using any SPAM-related words in the subject or body. For the email format, please create a JSON object. In the 'subject' field, include details about the campaign context,event name if provided, the 'shop name', and the 'customer name' and incorporate emojis only in 'subject' field. In the 'body' field, provide the context using the 'Customer LTB model' that understands the customer's behavior and read the 'Shop Description' provided below and recommend the products mentioned on the Shop description not on the Customer description . Keep the response as short as the given character limit. Additionally, please remember to conclude the email with the mention of the shop name.`,
    },
    {
      role: "user",
      content: `Generate a ${tone} tone marketing email tailored to ${target_audience} audience for the Customer ${first_name} ${last_name} for upcoming ${context}, ${
        event_name ? `Event : ${event_name}` : ``
      } ${
        event_date ? `Starts on : ${event_date}` : ``
      }, Customer Description: ${customer_behavior} and Shop Description: ${product_offering}, ${
        coupon ? `Coupon Code : ${coupon}` : ``
      } , Shop Website: ${shopDomain}, Shop name: ${shop_name}, and avoid using these words such as \'${keywords.toString()}\' in the response.`,
    },
    {
      role: "assistant",
      content: `{"subject": "🎉 Bigg Billion Sale for Michael Anderson 🎉","body": "Hello Michael Anderson,

      I hope this message finds you in excellent health and high spirits, ready to embark on an exciting new chapter in your fitness journey this Christmas! After closely examining your order history, it's evident that you possess a discerning taste for top-quality fitness equipment.
      
      At LA Fitness Pro, we offer a comprehensive range of fitness gear that includes everything from Olympic Barbell Sets and Adjustable Dumbbell Pairs to Weight Benches with Racks and Protein Powders. It's all here, and it's all of the highest quality. This Black Friday presents a golden opportunity to elevate your fitness routine with premium gear, all at unbeatable prices. You definitely won't want to miss out on this fantastic offer!
      
      Visit our online store at www.lafitnesspro.myshopify.com and start filling up your shopping cart today. To kickstart your shopping experience, don't forget to use the exclusive coupon code "**FIRST20**" during checkout to enjoy a special discount on your inaugural purchase. But don't wait too long – these exceptional deals are available for a limited time only!
      
      Happy shopping, and together, let's conquer those fitness goals!
      
      Warmest regards,
      LA Fitness Pro "
      }`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-0613",
    temperature: 0.4,
  });
  const response = {
    role: completion.choices[0].message.role,
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  const result = [
    messages[0],
    messages[1],
    { role: response.role, content: response.content },
  ];
  console.log(chalk.red(JSON.stringify(result)));
  res.send(response);
});

app.get("/whatsapp-message", async (req, res) => {
  const {
    context,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
    tone,
    keywords,
    target_audience,
    event_name,
    event_date,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As a Marketing manager, your goal is to craft a WhatsApp message for my personalized WhatsApp marketing campaign to my shop's customers based on the prompt below. The response should adopt the tone and the targeted audience described below. Keep the email body concise and please respond in the same format as the 'assistant' role content but as per the tone and the targeted audience mentioned in the prompt. Do not provide any coupon or promo codes on your own. If a coupon code is provided in the prompt,emphasize it in the response content using bold letters. Remember to avoid using any SPAM-related words in the subject or body. For the message format, please create a JSON object. In the 'greetings' field, include a happy greeting with the customer's name. In the 'subject' field, include only the campaign context or event name if provided. In the 'body' field, mention the context and provide the response using the 'Customer LTB model' that understands the customer's behavior and read the 'Shop Description' provided below and recommend the products mentioned on the Shop description not on the Customer description .keep the response as short as 65 words and incorporate emojis. Additionally, please remember to conclude the message with the mention of the shop name.`,
    },
    {
      role: "user",
      content: `Generate a ${tone} tone marketing whatsapp message tailored to ${target_audience} for Customer ${first_name} ${last_name} for upcoming ${context}, ${
        event_name ? `Event : ${event_name}` : ``
      } ${
        event_date ? `Starts on : ${event_date}` : ``
      }, Customer Description: ${customer_behavior} and Shop Description: ${product_offering} , ${
        coupon ? `Coupon Code : \'${coupon}\'` : ``
      } , Shop Website: ${shopDomain} Shop name: ${shop_name}, and avoid using these words such as  \'${keywords.toString()}\' in the response.`,
    },
    {
      role: "assistant",
      content: `{"greetings": "Hey Emma Mackey! 👋",
      "subject": "Big billion sale is Here , Emma Mackey!",
      "body": "🎮🔥 Welcome to Tagbot Gaming Shop! 🔥🎮 Discover the future of entertainment for this Halloween with our latest electronics lineup, including 📺 TVs and 🔊 audio equipment.\n\nBased on your order history, we see you've purchased gaming equipment like the BENQ monitor and NVIDIA 2060. We've got you covered with some must-have gaming gadgets: 🖱️ Corsair Gaming Mouse, ⌨️ Logitech Keyboard with RGB Red Switch, 🎧 Red Gear Gaming Headset, 💽 NVME SSD, and ❄️ Cooler Master Air Cooler.\n\n🌟 Special Offer: Use code **SMART30** to enjoy a 30% discount on Smart TVs! 🌟 Visit us at www.tagbotgaming.myshopify.com for more details and to shop now.\n\n✨ Happy gaming, Emma! 🚀\n\nBest regards,\nTagbot Gaming Shop Team"
      " }`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-0613",
    temperature: 0.2,
  });
  const response = {
    role: completion.choices[0].message.role,
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  const result = [
    messages[0],
    messages[1],
    { role: response.role, content: response.content },
  ];
  console.log(chalk.red(JSON.stringify(result)));
  res.send(response);
});

app.get("/sms", async (req, res) => {
  const {
    context,
    shopDomain,
    first_name,
    last_name,
    customer_behavior,
    product_offering,
    shop_name,
    coupon,
    tone,
    keywords,
    target_audience,
    event_name,
    event_date,
  } = req.body;

  const messages = [
    {
      role: "system",
      content: `As a Marketing manager, your goal is to craft a SMS message for my personalized SMS marketing campaign to my shop's customers based on the prompt below. The message should adopt the tone and the targeted audience described below. Keep the sms body concise and please respond in the same format as the 'assistant' role content but as per the tone and the targeted audience mentioned in the prompt. Do not provide any coupon code or promo code on your own. If a coupon code is provided in the prompt,then emphasize it in the sms body using bold letters. Remember to avoid using any SPAM-related words in the subject or body. For the message format, please create a JSON object. In the 'greetings' field, include a happy greeting with the customer's name. In the 'subject' field, include only the campaign context event name if provided.In the 'body' field, provide the sms context using the 'Customer LTB model' that understands the customer's behavior and order history and read the 'Shop Description' provided below and recommend the products mentioned on the Shop description not on the Customer description and include the provided coupon code . Keep the response short not more than 60 characters and incorporate emojis. Additionally, please remember to conclude the message with the mention of the shop name.`,
    },
    {
      role: "user",
      content: `Generate a ${tone} tone  marketing SMS message tailored to ${target_audience}  for Customer ${first_name} ${last_name} for upcoming ${context},  ${
        event_name ? `Event : ${event_name}` : ``
      } ${
        event_date ? `Starts on : ${event_date}` : ``
      },Customer Description: ${customer_behavior} and Shop Description: ${product_offering} , ${
        coupon ? `Coupon Code : \'${coupon}\'` : ``
      }, Shop Website: ${shopDomain} Shop name: ${shop_name}, and avoid using these words such as \'${keywords.toString()}\' in the response.`,
    },
    {
      role: "assistant",
      content: `{"greetings": "Hey Emma Mackey! 👋",
      "subject": "🔥Big billion sale is Here for this Halloween, Emma Mackey!🔥",
      "body": "🎮 Tagbot Gaming Shop gives a special offer just for you. Use code **PUSH30** to enjoy a 30% discount on ⌨️ Logitech Keyboard with RGB Red Switch!  🌟 Visit now : www.tagbotgaming.myshopify.com \n\n✨ Happy gaming, Emma! 🚀\n\nTagbot Gaming Shop Team"
      " }`,
    },
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo-0613",
    temperature: 0.3,
  });
  const response = {
    role: completion.choices[0].message.role,
    content: completion.choices[0].message.content,
    prompt_tokens: completion.usage.prompt_tokens,
    completion_tokens: completion.usage.completion_tokens,
    total_tokens: completion.usage.total_tokens,
  };

  const result = [
    messages[0],
    messages[1],
    { role: response.role, content: response.content },
  ];
  console.log(chalk.red(JSON.stringify(result)));
  res.send(response);
});

app.get("/finetune-job-creation", async (req, res) => {
  //create and upload the file
  const response = await openai.files.create({
    file: fs.createReadStream("fine-tune-email.jsonl"),
    purpose: "fine-tune",
  });
  const fileId = response.id;

  //looping and waiting until the file gets uploaded
  while (true) {
    const info = await openai.files.retrieve(fileId);
    const status = info.status;
    if (status == "uploaded") {
      console.log("status: ", status);
      await sleep(10000);
      continue; // sleep for 10 seconds
    } else if (status == "processed") {
      console.log("status: ", status);
      console.log("File uploaded successfully");
      break;
    } else if (status == "failed") {
      console.log("The file failed to process.");
      break;
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //creating the job which will be the custom trained model
  console.log("creating Job");
  const fineTune = await openai.fineTuning.jobs.create({
    training_file: fileId,
    model: "gpt-3.5-turbo-0613",
  });

  while (true) {
    // see if the status is succeeded, or else wait for some time so that it will get changed and it will give u the trained model name.
    const fineTuneJob = await openai.fineTuning.jobs.retrieve(fineTune.id);
    console.log("Model name", fineTuneJob.fine_tuned_model);
    if (fineTuneJob.fine_tuned_model || fineTuneJob.status == "succeeded") {
      console.log("custom model is ready to use");
      break;
    }
    console.log("custom model status: ", fineTuneJob.status);
    console.log("waiting for custom model to get created");
    await sleep(10000);
    continue;
  }
  console.log("full job object: ", fineTuneJob);
  console.log("fine tuned model name : ", fineTuneJob.fine_tuned_model);
  res.json({
    status: "Successfully created a job",
    fileId,
    jobId: fineTune.id,
    fineTuneJob,
  });
});

app.get("/finetune-status", async (req, res) => {
  const { jobId } = req.query;
  const fineTuneJob = await openai.fineTuning.jobs.retrieve(jobId);
  console.log("full job: ", fineTuneJob);
  res.json({ jobId, fineTuneJob });
});

app.get("/finetune-customer-behavior-generation", async (req, res) => {
  const { firstName, lastName, city, country, orderHistory } = req.body;

  let messages = [
    {
      role: "user",
      content: `Generate a customer behavior for Customer Name: ${firstName} ${lastName}, Region: ${city} ${country},Order History:${JSON.stringify(
        orderHistory
      )} and do not provide product description and generate content in 100 words`,
    },
  ];
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
  const {
    context,
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

  let fileId = process.env.FINE_TUNE_EMAIL_FILE_ID;
  let fineTune = process.env.FINE_TUNE_EMAIL_JOB_ID;

  let messages = [
    {
      role: "user",
      content: `Generate a marketing email based on the ${tone} tone for Customer Name: ${first_name} ${last_name} for ${context}, Customer Description: ${customer_behavior} and Shop Description: ${product_offering} ${
        coupon ? `Coupon Code : ${coupon}` : ``
      } Shop Website: ${shopDomain} Shop name: ${shop_name}.The email format should be in JSON object with "Subject" field containing what the campaign is about and "shop name" and "Customer name" in it, and "body" field should have the email context with these keywords : ${keywords} excludedand the products list from shop description. Notes: In the end include the shop name and do not exceed ${length} words in the email context`,
    },
  ];
  const completion = await openai.chat.completions.create({
    messages,
    model: process.env.FINE_TUNE_EMAIL_FINE_TUNED_MODEL,
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

app.get("/prompt-engine-email-generation", async (req, res) => {
  //configured with the tone, length and keywords fields//
  const {
    context,
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

  const description = `As an Email Marketing Software Service, Your objective is to create an email for my personalized email marketing campaign to the customers of my shop based on the below prompt.The email should be in the below mentioned tone.Include the email's subject line's client name and context. Keep the email body short not to exceed the given number of words and respond in the same format as in "assistant" role content. Do not include any promo codes on your own. If I offer a discount code, please highlight it in the email context in bold letters.Remember not to use any SPAM words in subject or body`;

  const examples = [
    {
      input:'Generate a marketing email for Customer Name: Sophia Williams for Halloween Sale, Customer Purchase History: Customer Sophia Williams, who is from London, UK, has a preference for luxury fashion items based on her order history. She has bought a Designer Leather Jacket, High-End Italian Leather Shoes, Silk Evening Gown, and Cashmere Sweater. Based on her purchases, it is clear that she has a taste for high-quality and stylish clothing. To target her preferences, advertisements or promotions for premium fashion brands, designer clothing, and accessories would be effective. Additionally, promotions for exclusive discounts or limited edition collections could also be appealing to her. Overall, Sophia Williams is a customer from London, UK, who is interested in luxury fashion items. and Products available in the shop: Introducing London Couture, the ultimate destination for exclusive designer clothing. Elevate your style with our exquisite collection of elegant evening dresses, tailored suits for men, designer handbags, luxury cashmere sweaters, and classy leather Oxford shoes. Each product is crafted with utmost care and attention to detail, ensuring a perfect fit and sophisticated look. Discover a world of high-end fashion and shop at www.londoncouture.myshopify.com to elevate your style to new heights. London Couture - Elevating your style with exclusive designer clothing. Coupon:FIRST20 Shop Website: www.londoncouture.myshopify.com Shop name: London Couture The email format should be in JSON object with "subject" property, which should include "Diwali Sale" and shop website (make it as hyperlink) and "Customer name" in it, and "body" property which should have the email context. NoteS: In the end include the shop name',
      response:
        '{"subject": "🎃 Halloween Sale for Sophia Williams 🎃","body": "Hello Sophia Williams, 🎃 Get ready for a spooktacular Halloween sale at London Couture! 🕷️🎉 We know you have a taste for luxury fashion, and this sale is tailor-made for you. 👗👠 From exquisite designer leather jackets to high-end Italian leather shoes, silk evening gowns, and cashmere sweaters, we have everything you need to elevate your style. 💎✨\n\nThe Halloween Sale offers mind-blowing discounts on our entire collection of premium fashion brands, designer clothing, and accessories. 👜🔥 Don\'t miss out on these ultimate offers! 😱💸\n\nShop now at www.londoncouture.myshopify.com to discover the perfect additions to your wardrobe. 🛍️🌟 Hurry, the sale ends soon!\n\nLondon Couture - Elevating your style with exclusive designer clothing."}',
    },
    {
      input:'Generate a marketing email based on the informative and professional tone for Customer Name: Michael Anderson for Black Friday Sale, Customer Description: Michael Anderson is interested in fitness and workout equipment as indicated by his purchase history. He has bought an Olympic Barbell Set, Adjustable Dumbbell Pair, Weight Bench with Rack, and Protein Powder. Based on this, it is clear that Michael is interested in fitness and weight lifting. Targeted advertisements or promotions that would likely appeal to him include gym memberships, weight training accessories such as lifting gloves or belts, workout clothing, and protein supplements. These recommendations would align with his interests and encourage him to continue investing in his fitness journey. Overall, Michael Anderson from Los Angeles, USA is interested in fitness and workout equipment. and Shop Description: Introducing LA Fitness Pro Shop, your go-to destination for all your fitness and sports gear needs in Los Angeles. Explore our wide range of products including professional treadmills, weightlifting sets, yoga mat and accessories kits, basketball gear packages, and top-quality running shoes. With LA Fitness Pro Shop, you can find everything you need to enhance your fitness routine and excel in your favorite sports. Visit us online at www.lafitnesspro.myshopify.com and start your journey towards a healthier and more active lifestyle today. Coupon Code : FIRST20 Shop Website: www.lafitnesspro.myshopify.com Shop name: LA Fitness Pro. The email format should be in JSON object with "Subject" should include what the campaign is about and "shop name" and "Customer name" in it, and "body" should have the email context with these keywords : Bumper offer, mind-blowing, ultimate offers and the products list from shop description. Notes: In the end include the shop name and do not exceed 150 words in the email context',
      response: {
        subject: "🎉 Ultimate Black Friday Sale for Michael Anderson 🎉",
        body: "Hello Michael Anderson, 🎉 We hope you're staying fit and healthy!. From your past purchases, it's clear that you're passionate about fitness and weightlifting. 💪\nWe're excited to announce our Bumper Black Friday Sale, exclusively for our valued customers like you. 🛍️ With mind-blowing discounts on a wide range of workout equipment and accessories, you can take your fitness routine to the next level!\nCheck out our fantastic offers:\n1. Olympic Barbell Set\n2. Adjustable Dumbbell Pair\n3. Weight Bench with Rack\n4. Protein Powder\nAnd more!\nJust for you, we're offering an extra 20% discount on your first purchase. Use the coupon code FIRST20 at checkout to avail of this special offer.\nDon't miss out on these amazing deals! Visit our website at www.lafitnesspro.myshopify.com to grab your favorite fitness gear at unbeatable prices.\nWishing you a healthy and active Black Friday!,\nLA Fitness Pro Shop 🏋️",
      },
    },
  ];

  const codeEngine = new CodeEngine(description, examples, "", {
    modelConfig: { maxTokens: 10000 },
  });

  const query = `Generate a marketing email based on the ${tone} tone for Customer Name: ${first_name} ${last_name} for ${context}, Customer Description: ${customer_behavior} and Shop Description: ${product_offering} ${
    coupon ? `Coupon Code : ${coupon}` : ``
  } Shop Website: ${shopDomain} Shop name: ${shop_name}.The email format should be in JSON object with "Subject" should include what the campaign is about and "shop name" and "Customer name" in it, and "body" should have the email context with these keywords : ${keywords} excluded, the products list from shop description and do not exceed ${length} words. Notes: In the end include the shop name.`;
  const prompt = codeEngine.buildPrompt(query);
  const messages = [
    {
      role: "system",
      content:
        "As an Email Marketing Software Service, Your objective is to create an email for my personalized email marketing campaign to the customers of my shop based on the below prompt.The email should be in the below mentioned tone.Include the email's subject line's client name and context. Keep the email body short not to exceed the given number of words and respond in the same format as in \"assistant\" role content. Do not include any promo codes on your own. If I offer a discount code, please highlight it in the email context in bold letters.Remember not to use any SPAM words in subject or body",
    },
    {
      role: "user",
      content: prompt,
    },
    {
      role: "assistant",
      content: `{"subject": "🎉 Black Friday sale for Pradeep Kumar 🎉","body": "Hello Pradeep Kumar, 🎉 Wishing you a Happy Diwali as bright as your gaming skills! 🕹️ We couldn't help but notice your fantastic taste in gaming accessories and electronics. 🎮 From your shopping history, you're clearly a gaming aficionado! 🎮.
                This Diwali, we have some electrifying news for you. ⚡ But that's not all! Our shop is a treasure trove of gaming goodness. 🎁 Here are some more items we think you'll love,
                1. 🖱️ Corsair Gaming Mouse
                2. ⌨️ Logitech Keyboard with RGB red switch
                3. 🎧 Red Gear Gaming Headset
                4. 💽 NVME SSD and many more. 💽
                These are just a taste of what we have to offer. Visit our website at www.tagbot.myshopify.com to explore our full range of products and take your gaming to the next level. 🌐 Wishing you a joyful Diwali filled with wins, power-ups, and high scores! 🏆
                Warm regards, 🎮
                Tagbot Gaming Shop 🎮"
              }`,
    },
  ];
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

  res.send(result);
  console.log(chalk.red(JSON.stringify(messages)));
  console.log(chalk.green(JSON.stringify(result)));
});

app.get("/finetune-whatsapp-message", async (req, res) => {
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

  let messages = [
    {
      role: "user",
      content: `Generate a marketing whatsapp message based on the ${tone} tone for Customer Name: ${first_name} ${last_name} for ${contextForWhatsappMessage}, Customer Purchase History: ${customer_behavior} and Products available in the shop: ${product_offering} ${
        coupon ? `Coupon Code : ${coupon}` : ``
      } Shop Website: ${shopDomain} Shop name: ${shop_name}.The email format should be in JSON object with "greetings" property,"subject" property, which should include "${contextForWhatsappMessage}" and shop website and "Customer name" in it, and "body" property which should have the marketing context with these keywords : ${keywords} excluded. Notes: In the end include the shop name ,strictly follow the size of the content and use only the products list provided`,
    },
  ];
  const completion = await openai.chat.completions.create({
    messages,
    model: process.env.FINE_TUNE_WHATSAPP_FINE_TUNED_MODEL,
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
