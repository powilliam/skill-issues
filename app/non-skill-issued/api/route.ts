import { NextResponse, type NextRequest } from "next/server";

import { generate } from "@/utils/generate";
import { squared } from "@/utils/squared";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const total = Number(query.get("total")) || 100;

  const data = await generate(total);
  const output = squared(data);

  return NextResponse.json(output);
}
