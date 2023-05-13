import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { TestProvider } from "../../../utils/TestProvider";
import { UserMenu } from "../UserMenu";
import userEvent from "@testing-library/user-event";

describe("UserMenu", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<UserMenu />, {
      wrapper: TestProvider,
    });
    expect(screen.getByRole("button")).toBeTruthy();
  });

  test("Should able to open user menu", async () => {
    render(<UserMenu />, {
      wrapper: TestProvider,
    });
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("menuitem")).toHaveLength(4);
  });
});
