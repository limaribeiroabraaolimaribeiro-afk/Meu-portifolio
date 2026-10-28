import { onCLS, onINP, onLCP } from "web-vitals";
export function observeMetrics() {
  const root = document.documentElement;
  for (const [name, register] of [
    ["cls", onCLS],
    ["inp", onINP],
    ["lcp", onLCP],
  ])
    register(
      (metric) => {
        root.dataset[name] = String(Math.round(metric.value * 1000) / 1000);
        if (name === "inp")
          root.dataset.inpTiming = JSON.stringify(
            metric.entries.slice(-3).map((entry) => ({
              event: entry.name,
              duration: entry.duration,
              inputDelay: Math.round(entry.processingStart - entry.startTime),
              processing: Math.round(
                entry.processingEnd - entry.processingStart,
              ),
            })),
          );
      },
      { reportAllChanges: true },
    );
}
