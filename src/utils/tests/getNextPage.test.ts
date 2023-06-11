import { afterEach, describe, expect, test } from "vitest";

import { cleanup } from "@testing-library/react";
import { getNextPageParam } from "../getNextPage";

describe("getNextPage", () => {
  afterEach(() => {
    cleanup();
  });

  test("Should return next page", () => {
    expect(
      getNextPageParam({
        data: new Array(10).fill(1),
        nextPage: 1,
      }),
    ).toBe(1);
  });

  test("Should return undefined if list items is less than 10", () => {
    expect(
      getNextPageParam({
        data: new Array(5).fill(1),
        nextPage: 1,
      }),
    ).toBe(undefined);
  });
});
