import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
// This file only ever runs on the server (Next.js Route Handler), so the
// API key is never bundled into client JS or visible in the browser.
const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;


const knowledgePath = path.join(process.cwd(), "app", "knowledge");

function loadKnowledge() {
  const files = [
    "company.md",
    "modules.md",
    "workflows.md",
    "faqs.md",
    "glossary.md",
    "system_profile.md",
  ];

  return files
    .map(file => {
      const content = fs.readFileSync(
        path.join(knowledgePath, file),
        "utf8"
      );

      return `### ${file}\n${content}`;
    })
    .join("\n\n");
}

const KNOWLEDGE = loadKnowledge();

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
        systemInstruction: KNOWLEDGE,
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