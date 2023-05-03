import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { SignupForm } from "../SignupForm";
import { TestProvider } from "../../../utils/TestProvider";

describe("SignupForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<SignupForm />, {
      wrapper: TestProvider,
    });
    expect(screen.getByRole("form")).toBeTruthy();
  });
});
