import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Post } from "../index";
import { Post as PostType } from "../../../services/usePosts";
import { createWrapper } from "../../../utils/createWrapper";

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

describe("Post", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<Post data={post} />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByRole("article")).toBeTruthy();
  });
});
