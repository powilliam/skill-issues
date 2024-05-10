"use client";

import { useReportWebVitals } from "next/web-vitals";
import useStaleWhileRevalidate from "swr";

import { AutoSizer, List } from "react-virtualized";

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
    <main style={{ overflowY: "hidden" }}>
      <AutoSizer disableHeight>
        {(size) => (
          <List
            {...size}
            rowHeight={25}
            height={window?.screen?.availHeight || 0}
            rowCount={numbers?.length || 0}
            rowRenderer={({ index, style }) => (
              <div key={numbers[index]} style={style}>
                <li>{numbers[index]}</li>
              </div>
            )}
          />
        )}
      </AutoSizer>
    </main>
  );
}
