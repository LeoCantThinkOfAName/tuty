import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { AuthModal } from "..";
import { TestProvider } from "../../../utils/TestProvider";

describe("AuthModal", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<AuthModal isOpen={true} onClose={() => {}} />, {
      wrapper: TestProvider,
    });

    expect(screen.getByRole("dialog")).toBeTruthy();
  });
});
