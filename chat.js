// chatGPT.js
const OpenAI = require("openai");
require('dotenv').config(); // Include this line if you are using a .env file


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

//const openai = new OpenAI({
//    apiKey: "
//});


async function main(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ 
        role: "system", 
        content: "You are a helpful assistant." 
    },{
        role: "user", 
        content: prompt 
    }
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main("mi nombre es mario");
