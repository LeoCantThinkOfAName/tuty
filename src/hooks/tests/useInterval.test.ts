import { afterEach, describe, expect, test, vi } from "vitest";

import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useInterval } from "../useInterval";

describe("useCountDown", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.clearAllTimers();
  });

  test("Should render", () => {
    const { result } = renderHook(() => useInterval(() => {}, 100));
    expect(result).toBeDefined();
  });

  test("Should run callback", async () => {
    console.log = vi.fn();
    let count = 0;
    renderHook(() =>
      useInterval(() => {
        console.log(`test ${count}`);
        count++;
      }, 100),
    );
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(console.log).toHaveBeenCalledWith("test 0");
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(console.log).toHaveBeenCalledWith("test 1");
  });
});
