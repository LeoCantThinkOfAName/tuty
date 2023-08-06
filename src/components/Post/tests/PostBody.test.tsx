import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Card } from "@chakra-ui/react";
import { PostBody } from "../PostBody";
import { Post as PostType } from "../../../services/usePosts";
import { createWrapper } from "../../../utils/createWrapper";
import { post } from "./Post.test";
import userEvent from "@testing-library/user-event";

const renderComponent = (post: PostType, forceHide: boolean = false) =>
  render(
    <Card>
      <PostBody post={post} forceHide={forceHide} />
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
    renderComponent(post);
    expect(screen.getByText("Hello world")).toBeTruthy();
  });

  test("Should hide fold button when little or no content", async () => {
    renderComponent(post);
    expect(screen.queryByRole("button")).toBeFalsy();
  });

  test("Should able to toggle content fold/unfold", async () => {
    renderComponent(post, true);

    const btn = screen.getByRole("button");
    const origText = btn.textContent;
    await act(async () => userEvent.click(btn));
    expect(btn.textContent).not.toBe(origText);
  });
});
