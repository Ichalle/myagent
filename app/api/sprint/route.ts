import { NextRequest, NextResponse } from "next/server";
import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
    apiKey: 'pcsk_37PFpZ_Pgh99q5AuFw9NqiZvUp92MTwHr8U1AyawDvDyrFM5kbAzP6zPsac7T5Y5HEQ4C1'
});

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { message: string } },
// ) {
//   const { message } = params;
//   const assistantName = 'tech-assistant';
//   const assistant = pc.Assistant(assistantName);
//   const chatResp = await assistant.chat({
//     messages: [{ role: 'user', content: message }],
//   });
//   console.log(chatResp);
//   return NextResponse.json(chatResp);
// }

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { message } = body;
 
  // e.g. Insert new user into your DB
  // const newUser = { id: Date.now(), message };

  const assistantName = 'tech-assistant';
  const assistant = pc.Assistant(assistantName);
  const chatResp = await assistant.chat({
    messages: message
  })  // const chatResp = await assistant.chat({
  //   messages: [{ role: 'user', content: message }],
  // });
 
  return new Response(JSON.stringify(chatResp), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}