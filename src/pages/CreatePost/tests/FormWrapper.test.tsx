import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { FormWrapper } from "../FormWrapper";
import { createWrapperWithFormContext } from "../../../utils/createWrapper";

describe("FormWrapper", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<FormWrapper />, {
      wrapper: createWrapperWithFormContext(),
    });
    expect(screen.getAllByRole("group")).toHaveLength(3);
  });
});
