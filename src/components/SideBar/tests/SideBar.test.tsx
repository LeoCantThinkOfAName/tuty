import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { SideBar } from "../index";
import { TestProvider } from "../../../utils/TestProvider";

describe("SideBar", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<SideBar />, {
      wrapper: TestProvider,
    });
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
