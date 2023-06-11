import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { UserMenu } from "../UserMenu";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

describe("UserMenu", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<UserMenu />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByRole("button")).toBeTruthy();
  });

  test("Should able to open user menu", async () => {
    render(<UserMenu />, {
      wrapper: createWrapper(),
    });
    await act(async () => userEvent.click(screen.getByRole("button")));
    await waitFor(() =>
      expect(screen.queryAllByRole("menuitem")).toHaveLength(4),
    );
  });
});
