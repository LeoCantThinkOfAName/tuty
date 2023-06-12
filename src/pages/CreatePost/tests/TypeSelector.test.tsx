import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { TypeSelector } from "../fields/TypeSelector";
import { createWrapperWithFormContext } from "../../../utils/createWrapper";

describe("TypeSelector", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<TypeSelector />, {
      wrapper: createWrapperWithFormContext(),
    });
    expect(screen.getByRole("group")).toBeTruthy();
  });
});
