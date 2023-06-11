import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Header } from "../index";
import { createWrapper } from "../../../utils/createWrapper";

describe("Header", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<Header />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByText("TUTY")).toBeTruthy();
  });
});
