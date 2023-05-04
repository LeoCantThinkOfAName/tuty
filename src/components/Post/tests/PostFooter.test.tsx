import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Card } from "@chakra-ui/react";
import { PostFooter } from "../PostFooter";
import { TestProvider } from "../../../utils/TestProvider";
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
        wrapper: TestProvider,
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
        wrapper: TestProvider,
      },
    );
    const allBtns = screen.getAllByRole("button");
    const commentBtn = allBtns[allBtns.length - 1];
    await userEvent.click(commentBtn);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
