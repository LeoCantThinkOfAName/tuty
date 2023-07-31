import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { Card } from "@chakra-ui/react";
import { PostBody } from "../PostBody";
import { Post as PostType } from "../../../services/usePosts";
import { createWrapper } from "../../../utils/createWrapper";
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

const post: PostType = {
  id: "471bd698-7c4e-4527-a0fc-a8331383faf6",
  content: "Hello world",
  authorId: "40e826ce-cd9b-4184-b172-3ff2cdbcc3c7",
  categoryId: 3,
  location: "East Tommiefurt",
  subject: "quidem quaerat",
  objective: "投資理財",
  rateType: "day",
  rate: 1110,
  createdAt: "2023-07-16T08:33:48.896+00:00",
  updatedAt: null,
  deletedAt: null,
  tags: ["PPT", "雅思"],
  author: {
    id: "40e826ce-cd9b-4184-b172-3ff2cdbcc3c7",
    name: "Jana Bednar",
    img: null,
    title: "Corporate Intranet Administrator",
  },
  category: {
    id: 3,
    name: "STUDY_GROUP",
  },
};

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
