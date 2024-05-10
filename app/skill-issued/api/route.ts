import type { NextRequest } from "next/server";

import { generate } from "@/utils/generate";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const total = Number(query.get("total")) || 100;

  const data = await generate(total);

  return Response.json(data);
}
