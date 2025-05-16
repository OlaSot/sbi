// app/api/dictionary/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "en";

  try {
    const dict = await import(`@/i18n/locales/${lang}/translation.json`);
    return NextResponse.json(dict.default);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load dictionary" }, { status: 500 });
  }
}