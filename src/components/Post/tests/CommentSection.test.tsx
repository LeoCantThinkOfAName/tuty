import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { CommentSection } from "../CommentSection";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

const mockSubmit = vi.fn();

describe("CommentSection", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<CommentSection onCancel={() => {}} onSubmit={mockSubmit} />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  test("Should able to submit", async () => {
    const { container } = render(
      <CommentSection onCancel={() => {}} onSubmit={mockSubmit} />,
      {
        wrapper: createWrapper(),
      },
    );
    await userEvent.click(screen.getByRole("textbox"));
    await userEvent.keyboard("1234");
    await userEvent.click(
      container.querySelector('button[type="submit"]') as HTMLButtonElement,
    );
    expect(mockSubmit).toBeCalled();
  });
});
