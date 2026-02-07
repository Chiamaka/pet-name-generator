import * as dotenv from 'dotenv';
import { generateText } from 'ai';

dotenv.config();

export async function POST(request: Request) {
  const data = await request.json();

  const result = await generateText({
    model: 'openai/o4-mini',
    system: `You are a helpful assistant that generates names for animals based on the type of animal provided.`,
    prompt: `Generate 3 short unique names for an animal that is a ${data.animal}. 
    The names should be creative. 
    Provide only the names without any additional text or explanation.`,
    temperature: 0.8,
  });

  return Response.json({ result: result.text });
}
