import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import OpenAI from "openai";
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o-mini";


export async function GET(event) {
    const prompt = `Write 16 concepts of the ${event.url.searchParams.get('field')} field, each concept should be about 25-28 words long, except for the last one that should be near 50 words long, also, each concept should follow exactly the next format:
{{$ [[concept-name]];[[concept-info]]/}}
Also, make sure that the whole result doesn't have more than 4000 characters.`;

    const token = env.GITHUB_TOKEN;

    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    const response = await client.chat.completions.create({
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt }
        ],
        temperature: 1.0,
        top_p: 1.0,
        max_tokens: 4000,
        model: modelName
    });

    const data = response.choices[0].message.content;
    return json({ data: data });
}