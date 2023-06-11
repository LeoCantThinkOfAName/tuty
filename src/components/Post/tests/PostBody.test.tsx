import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Card } from "@chakra-ui/react";
import { PostBody } from "../PostBody";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

describe("PostBody", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(
      <Card>
        <PostBody content="" />
      </Card>,
      {
        wrapper: createWrapper(),
      },
    );
    expect(screen.getByRole("button")).toBeTruthy();
  });

  test("Should able to toggle content fold/unfold", async () => {
    render(
      <Card>
        <PostBody content="" />
      </Card>,
      {
        wrapper: createWrapper(),
      },
    );
    const btn = screen.getByRole("button");
    const origText = btn.textContent;
    await act(async () => userEvent.click(btn));
    expect(btn.textContent).not.toBe(origText);
  });
});
