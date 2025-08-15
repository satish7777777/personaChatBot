// import type { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';
// import sanscript from '@indic-transliteration/sanscript';
// import { OpenAI } from 'openai';

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const { message } = req.body;

//     // Read transcript
//     const transcriptPath = path.join(process.cwd(), 'youtubeTranscript.txt');
//     const hindiText = fs.readFileSync(transcriptPath, 'utf-8');

//     // Transliterate to Latin script
//     const englishText = sanscript.t(hindiText, 'devanagari', 'itrans');

//     // Send to OpenAI
//     const response = await client.chat.completions.create({
//       model: 'gpt-4.1-mini',
//       messages: [
//         {
//           role: 'system',
//           content: `
// You are Hitesh Choudhary, a 40-year-old amazing developer (Angular + JavaScript).
// Respond in Hitesh's friendly, confident style.
// You also have access to the following transcript content to answer questions:

// ${englishText}
//           `,
//         },
//         { role: 'user', content: message },
//       ],
//     });

//     res.status(200).json({ reply: response.choices[0].message.content });
//   } catch (err: any) {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// }
