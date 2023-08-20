import * as Context from "../../../contexts/AuthContext";

import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Session } from "@supabase/supabase-js";
import { UserMenu } from "../UserMenu";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

const mockContext = (session: Session | null) => {
  vi.spyOn(Context, "useAuthContext").mockImplementation(() => ({
    toggle: () => {},
    session,
  }));
};

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

  test("Should able to open AuthModal", async () => {
    mockContext(null);
    render(<UserMenu />, {
      wrapper: createWrapper(),
    });
    await act(async () => userEvent.click(screen.getByRole("button")));
    await waitFor(() => expect(screen.findByRole("dialog")).toBeTruthy());
  });

  test("Should able have 4 list items", async () => {
    mockContext({} as Session);
    render(<UserMenu />, {
      wrapper: createWrapper(),
    });
    await act(async () => userEvent.click(screen.getByRole("button")));
    await waitFor(() =>
      expect(screen.queryAllByRole("menuitem")).toHaveLength(4)
    );
  });
});
