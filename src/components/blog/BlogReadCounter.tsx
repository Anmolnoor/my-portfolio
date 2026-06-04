import { useEffect, useState } from "react";

interface BlogReadCounterProps {
  slug: string;
}

type CounterState =
  | { status: "loading"; count: null }
  | { status: "ready"; count: number }
  | { status: "unavailable"; count: null };

const formatCount = (count: number) =>
  `${count.toLocaleString()} ${count === 1 ? "read" : "reads"}`;

export default function BlogReadCounter({ slug }: BlogReadCounterProps) {
  const [state, setState] = useState<CounterState>({
    status: "loading",
    count: null,
  });

  useEffect(() => {
    let cancelled = false;

    const recordRead = async () => {
      try {
        const response = await fetch(
          `/api/blog-reads/${encodeURIComponent(slug)}.json`,
          {
            headers: {
              Accept: "application/json",
            },
            method: "POST",
          }
        );
        const payload = (await response.json()) as {
          configured?: boolean;
          count?: number | null;
        };

        if (cancelled) {
          return;
        }

        if (
          response.ok &&
          payload.configured &&
          typeof payload.count === "number"
        ) {
          setState({ status: "ready", count: payload.count });
        } else {
          setState({ status: "unavailable", count: null });
        }
      } catch {
        if (!cancelled) {
          setState({ status: "unavailable", count: null });
        }
      }
    };

    void recordRead();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const label =
    state.status === "ready" ? formatCount(state.count) : "-- reads";

  return (
    <span
      aria-live="polite"
      className="inline-flex items-center gap-1"
      title={
        state.status === "unavailable"
          ? "Set KV_REST_API_URL and KV_REST_API_TOKEN to enable read counts"
          : undefined
      }
    >
      <span>{state.status === "loading" ? "reads" : label}</span>
    </span>
  );
}
