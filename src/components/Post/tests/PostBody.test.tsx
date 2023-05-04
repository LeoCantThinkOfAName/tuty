import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Card } from "@chakra-ui/react";
import { PostBody } from "../PostBody";
import { TestProvider } from "../../../utils/TestProvider";
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
        wrapper: TestProvider,
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
        wrapper: TestProvider,
      },
    );
    const btn = screen.getByRole("button");
    const origText = btn.textContent;
    await userEvent.click(btn);
    expect(btn.textContent).not.toBe(origText);
  });
});
