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

  test("Should able to set count down seconds", async () => {
    const { result } = renderHook(() => useCountDown(100));
    result.current.countDown(1);
    await waitFor(() => expect(result.current.count).toBe(1));
  });

  test("Should able to count down to 0", async () => {
    const { result } = renderHook(() => useCountDown(100));
    result.current.countDown(2);
    await waitFor(() => expect(result.current.count).toBe(2));
    await waitFor(() => expect(result.current.count).toBe(1));
    await waitFor(() => expect(result.current.count).toBe(0));
  });
});
