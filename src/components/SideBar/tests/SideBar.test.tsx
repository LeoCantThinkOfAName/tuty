import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { SideBar } from "../index";
import { createWrapper } from "../../../utils/createWrapper";

describe("SideBar", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<SideBar />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
