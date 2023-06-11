import { afterEach, describe, expect, test, vi } from "vitest";

import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useCountDown } from "../useCountDown";

const expectTarget = (
  hook: {
    current: {
      count: number;
      countDown: (time: number) => void;
      pauseCountDown: () => void;
    };
  },
  expected: number,
) => expect(hook.current.count).toBe(expected);

describe("useCountDown", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.clearAllTimers();
  });

  test("Should render", () => {
    const { result } = renderHook(() => useCountDown());
    expect(result.current).toHaveProperty("count");
    expect(result.current).toHaveProperty("countDown");
    expect(result.current).toHaveProperty("pauseCountDown");
  });

  test("Should able to set count down seconds", async () => {
    const { result } = renderHook(() => useCountDown(100));
    result.current.countDown(1);
    expectTarget(result, 1);
  });

  test("Should not start if no delay is provided", async () => {
    console.warn = vi.fn();
    const { result } = renderHook(() => useCountDown(0));
    result.current.countDown(0);
    expect(console.warn).toHaveBeenCalledWith("Please pass a target time");
  });

  test("Should not start if no time is provided", async () => {
    const { result } = renderHook(() => useCountDown(0));
    result.current.countDown(3);
    await new Promise((resolve) => setTimeout(resolve, 100));
    expectTarget(result, 3);
  });

  test("Should able to count down to 0", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCountDown(100));
    result.current.countDown(2);
    expectTarget(result, 2);
    await waitForNextUpdate();
    expectTarget(result, 1);
    await waitForNextUpdate();
    expectTarget(result, 0);
  });

  test("Should able to pause count down", async () => {
    const { result } = renderHook(() => useCountDown(100));
    result.current.countDown(2);
    expectTarget(result, 2);
    result.current.pauseCountDown();
    await new Promise((resolve) => setTimeout(resolve, 150));
    expectTarget(result, 2);
  });
});
