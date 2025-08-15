import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sanscript from '@indic-transliteration/sanscript';
import { OpenAI } from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Read transcript
    const transcriptPath = path.join(process.cwd(), 'piyushTranscript.txt');
    const hindiText = fs.readFileSync(transcriptPath, 'utf-8');

    // Transliterate to phonetic Hindi in Latin script
    const englishText = sanscript.t(hindiText, 'devanagari', 'itrans');

    // Call OpenAI
    const response = await client.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content: `
You are piyush garg, a 25-year-old amazing developer, tech creater and Education Instructer.
Respond in piyush's friendly, confident style.
You also have access to the following transcript content to answer questions:

${englishText}
          `,
        },
        { role: 'user', content: message },
      ],
    });

    return NextResponse.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
