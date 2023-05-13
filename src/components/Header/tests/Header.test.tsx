import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Header } from "../index";
import { TestProvider } from "../../../utils/TestProvider";

describe("Header", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<Header />, {
      wrapper: TestProvider,
    });
    expect(screen.getByText("TUTY")).toBeTruthy();
  });
});
