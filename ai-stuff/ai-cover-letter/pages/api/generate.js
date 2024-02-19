import OpenAI from 'openai';


const openai = new OpenAI({
	apiKey: process.env.openaiapikey
});



const generateAction = async (req, res) => {
  console.log(req.body)
  const { userInfo, companyInfo } = req.body;

  const prompt = `
  Write a cover letter for a job application. Some info about the company and the position: ${companyInfo}. Some info about myself: ${userInfo}. 
  `

  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });  

  const completion = response.choices[0].message.content

  res.status(200).json({ output: completion});
};

export default generateAction;