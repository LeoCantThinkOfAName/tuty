import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Card } from "@chakra-ui/react";
import { PostFooter } from "../PostFooter";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

describe("PostFooter", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(
      <Card>
        <PostFooter />
      </Card>,
      {
        wrapper: createWrapper(),
      },
    );
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });

  test("Should able to show comment section", async () => {
    render(
      <Card>
        <PostFooter />
      </Card>,
      {
        wrapper: createWrapper(),
      },
    );
    const allBtns = screen.getAllByRole("button");
    const commentBtn = allBtns[allBtns.length - 1];
    await act(async () => userEvent.click(commentBtn));
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
