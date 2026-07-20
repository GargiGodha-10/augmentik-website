import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// This file only ever runs on the server (Next.js Route Handler), so the
// API key is never bundled into client JS or visible in the browser.
const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION =
  "You are Auggie, the friendly AI recruiting assistant inside the Augmentik " +
  "staffing platform. Help users with hiring, candidate search, resume " +
  "screening, and workforce management questions. Keep answers concise, " +
  "practical, and professional, formatted for a chat bubble (short " +
  "paragraphs, no long markdown documents).";

type ChatHistoryItem = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: NextRequest) {
  if (!ai) {
    return NextResponse.json(
      { error: "Server is missing GEMINI_API_KEY. Add it to .env.local and restart the server." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const message: string = body?.message;
    const history: ChatHistoryItem[] = Array.isArray(body?.history)
      ? body.history
      : [];

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "A non-empty 'message' string is required." },
        { status: 400 }
      );
    }

    // Gemini expects roles "user" | "model". Map your UI's "assistant" role
    // to "model", and drop the most recent user turn from history since
    // it's passed separately as the live prompt below.
    const contents = history
      .slice(0, -1)
      .filter((m) => m.content && m.content.trim())
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const reply = response.text?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "Gemini returned an empty response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Gemini chat route error:", err);
    return NextResponse.json(
      { error: "Something went wrong talking to Auggie. Please try again." },
      { status: 500 }
    );
  }
}