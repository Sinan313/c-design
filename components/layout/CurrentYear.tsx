"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Renders the current year at runtime, so a statically built page never goes stale. */
export function CurrentYear({ fallback }: { fallback: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );
  return <>{year}</>;
}
