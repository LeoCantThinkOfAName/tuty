import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { RateField } from "../fields/RateField";
import { createWrapperWithFormContext } from "../../../utils/createWrapper";

describe("RateField", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<RateField />, {
      wrapper: createWrapperWithFormContext(),
    });
    expect(screen.getByRole("group")).toBeTruthy();
  });
});
