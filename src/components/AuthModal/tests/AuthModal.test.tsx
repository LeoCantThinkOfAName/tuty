import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { AuthModal } from "..";
import { createWrapper } from "../../../utils/createWrapper";

describe("AuthModal", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<AuthModal isOpen={true} onClose={() => {}} />, {
      wrapper: createWrapper(),
    });

    expect(screen.getByRole("dialog")).toBeTruthy();
  });
});
