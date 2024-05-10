import { NextResponse, type NextRequest } from "next/server";

import { generate } from "@/utils/generate";
import { squared } from "@/utils/squared";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const total = Number(query.get("total")) || 100;

  const data = await generate(total);

  const first = squared(data);
  const second = squared(first);
  const third = squared(second);
  const fourth = squared(third);
  const fifth = squared(fourth);

  return NextResponse.json(fifth);
}
