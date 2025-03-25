import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    const prompt = `Just answer the question and keep it easy: ${question}`;

    const response = await openAi.chat.completions.create({
      model: "meta-llama/llama-3.2-3b-instruct:free",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const aiContent = response.choices[0]?.message?.content?.trim() || "No response from AI";

    return NextResponse.json({ reply: aiContent });
  } catch (error) {
    console.error("AI API Error:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}







