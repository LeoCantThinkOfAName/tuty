import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, renderHook, waitFor } from "@testing-library/react";

import { useCountDown } from "../useCountDown";

describe("useCountDown", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const { result } = renderHook(() => useCountDown());
    expect(result.current).toHaveProperty("count");
    expect(result.current).toHaveProperty("countDown");
  });

  test("Should able to set countdown seconds", async () => {
    const { result } = renderHook(() => useCountDown());
    result.current.countDown(1);
    await waitFor(() => expect(result.current.count).toBe(1));
  });

  test("Should able countdown", async () => {
    const { result } = renderHook(() => useCountDown());
    result.current.countDown(1);
    await waitFor(() => expect(result.current.count).toBe(1));
    await waitFor(() => expect(result.current.count).toBe(0));
  });
});
