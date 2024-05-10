"use client";

import { useReportWebVitals } from "next/web-vitals";
import useStaleWhileRevalidate from "swr";

import { AutoSizer, List } from "react-virtualized";

import { json } from "@/utils/json";
import { squared } from "@/utils/squared";
import { screen } from "@/utils/window";

export default function Page({
  searchParams: { total },
}: {
  searchParams: { total: string };
}) {
  useReportWebVitals(console.log);

  const { data: numbers } = useStaleWhileRevalidate("skill-issued", () =>
    fetch(`/skill-issued/api?total=${total || 100}`)
      .then(json)
      .then(squared)
  );

  const sSize = screen();

  return (
    <main style={{ overflowY: "hidden" }}>
      <AutoSizer disableHeight>
        {(size) => (
          <List
            {...size}
            rowHeight={25}
            height={sSize.availHeight}
            rowCount={numbers?.length || 0}
            rowRenderer={({ index, style }) => (
              <div key={numbers?.[index]} style={style}>
                <li>{numbers?.[index]}</li>
              </div>
            )}
          />
        )}
      </AutoSizer>
    </main>
  );
}
