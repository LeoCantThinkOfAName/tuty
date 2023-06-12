import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { CreatePostPage } from "../index";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

describe("CreatePostPage", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const { container } = render(<CreatePostPage />, {
      wrapper: createWrapper(),
    });
    expect(container).toBeTruthy();
  });

  test("Should able to switch different form", async () => {
    render(<CreatePostPage />, {
      wrapper: createWrapper(),
    });
    expect(screen.getAllByRole("group")).toHaveLength(6);
    const select = screen.getByRole("menu");
    await act(async () => userEvent.selectOptions(select, ["study_group"]));
    expect(screen.getAllByRole("group")).toHaveLength(5);
  });
});
