import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { MainLayout } from "../MainLayout";
import { TestProvider } from "../../utils/TestProvider";

describe("MainLayout", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<MainLayout />, {
      wrapper: TestProvider,
    });
    expect(screen.getByText("TUTY")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
