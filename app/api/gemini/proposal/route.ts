import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { businessName, businessType, message, services, budget } = await req.json();
    
    // Check if GEMINI_API_KEY exists
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ 
        error: "Branding consultant API key is not configured in Secrets. You can still generate a standard growth roadmap!",
        fallback: true
      }, { status: 200 });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const prompt = `You are the chief brand strategist & director at DGEN Z, an ultra-premium, high-performance 3D digital agency.
    A premium business has submitted their details for a custom growth and branding strategy.
    
    Here is the submission details:
    - Business Name: ${businessName}
    - Business Type: ${businessType}
    - Services Requested: ${services.join(', ')}
    - Budget Level: ${budget}
    - Specific Context: ${message || "Wants to maximize leads and brand authority."}

    Generate a captivating, immersive, and highly customized Marketing & Growth Strategy Proposal.
    Use bold futuristic headings. Write with deep energy, emphasizing visual trust, luxury tech presentation, and lead-generating websites that work 24/7.
    Format your output with clean and premium markdown (including visual separator lines or bold sections). Use these exact headings:
    
    ## 🌌 DIGITAL BRAND IDENTITY REVAMP
    Assess how ${businessName} can transition into a premium-tier brand in their market, overcoming their current online invisibility.
    
    ## ⚡ THE DGEN Z SYSTEM (THE FIX)
    Break down the recommended solutions for their selected services: ${services.join(', ')}. Explain how a custom website will appear on Google and capture 3x more enquiries.
    
    ## 📈 ACQUISITION ENGINE & ROI DELIVERABLES
    Suggest exactly how a budget of ${budget} translates to pure client-attraction fuel, outline estimated roadmap landmarks and conversion tactics.
    
    ## 🕒 ACTION PLAN (NEXT 14 DAYS)
    Two bold, high-ticket actions they need to execute immediately to capture warm customer interest.
    
    Format the proposal with premium vocabulary, exciting the prospect to buy. End with a quote about modern digital power.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return NextResponse.json({ proposal: response.text });
  } catch (error: any) {
    console.error("Gemini API error during proposal generation:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to connect to AI consultant. Defaulting to manual strategic consultation.",
      fallback: true
    }, { status: 200 });
  }
}
