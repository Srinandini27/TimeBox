const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generatePlan(tasks, availability) {
  const prompt = `I have the following tasks: ${tasks}. I am available during ${availability}. Create a time-blocked daily plan.`;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 150,
  });

  const response = completion.data.choices[0].text.trim().split('\n').map(line => {
    const [time, ...rest] = line.split(':');
    return { time: time.trim(), task: rest.join(':').trim() };
  });

  return response;
}

module.exports = generatePlan;