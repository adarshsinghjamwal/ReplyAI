import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateReplies(tweetText: string, tone: string): Promise<string[]> {
  console.log('Starting generateReplies with tweet:', tweetText, 'and tone:', tone);

  const prompt = `Generate 3 replies in a ${tone} tone to this tweet:\n"${tweetText}"\nEach reply should be under 280 characters, highly engaging, and clearly reflect the ${tone} tone.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // ✅ or "gpt-4-1106-preview" if your key has access,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
    });

    const replyText = response?.choices?.[0]?.message?.content;

    if (!replyText) {
      console.error('No reply content returned from OpenAI:', response);
      return ['[Error: Could not generate replies. Please try again.]'];
    }

    return replyText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return ['[Error: Failed to fetch replies from AI. Please try again later.]'];
  }
}