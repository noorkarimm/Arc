import { createTogetherAI } from "@ai-sdk/togetherai";
import Together from "together-ai";

export const togetheraiClient = createTogetherAI({
  apiKey: process.env.TOGETHER_API_KEY ?? "",
  baseURL: "https://together.helicone.ai/v1",
  headers: {
    "Helicone-Auth": `Bearer ${process.env.HELICONE_API_KEY}`,
    "Helicone-Property-AppName": "SmartPDF",
  },
});

export const togetheraiBaseClient = new Together({
  apiKey: process.env.TOGETHER_API_KEY ?? "",
});
