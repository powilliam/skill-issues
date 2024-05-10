"use client";

import { useReportWebVitals } from "next/web-vitals";
import useStaleWhileRevalidate from "swr";

export default function Page({
  searchParams: { total },
}: {
  searchParams: { total: string };
}) {
  useReportWebVitals(console.log);

  const { data: numbers } = useStaleWhileRevalidate("skill-issued", () =>
    fetch(`/skill-issued/api?total=${total || 100}`)
      .then((r) => r.json())
      .then((numbers) => numbers.map((number: number) => number * number))
  );

  return (
    <ol>
      {numbers?.map((number: number) => (
        <li key={number}>{number}</li>
      ))}
    </ol>
  );
}
