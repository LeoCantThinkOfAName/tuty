import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { MainLayout } from "../MainLayout";
import { createWrapper } from "../../utils/createWrapper";

window.scrollTo = () => {};

describe("MainLayout", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<MainLayout />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByText("TUTY")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
