import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Card } from "@chakra-ui/react";
import { PostBody } from "../PostBody";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

const renderComponent = (content?: string, forceHide: boolean = false) =>
  render(
    <Card>
      <PostBody content={content ?? ""} forceHide={forceHide} />
    </Card>,
    {
      wrapper: createWrapper(),
    },
  );

describe("PostBody", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    renderComponent("Hello world");
    expect(screen.getByText("Hello world")).toBeTruthy();
  });

  test("Should hide fold button when little or no content", async () => {
    renderComponent();
    expect(screen.queryByRole("button")).toBeFalsy();
  });

  test("Should able to toggle content fold/unfold", async () => {
    renderComponent("Hello world", true);

    const btn = screen.getByRole("button");
    const origText = btn.textContent;
    await act(async () => userEvent.click(btn));
    expect(btn.textContent).not.toBe(origText);
  });
});
