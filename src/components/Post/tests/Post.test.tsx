import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Post } from "../index";
import { createWrapper } from "../../../utils/createWrapper";

const mockData = {
  id: "823fc79e-accb-4f8b-84a1-acbc2e880c84",
  content:
    "Corrupti iusto officiis veritatis error nulla ab. Rem doloremque placeat. Assumenda omnis eum quia iure.\nCommodi eos laboriosam maxime. Aut earum distinctio deserunt sit praesentium doloribus. Quibusdam totam in illum mollitia atque deleniti esse.\nAnimi facere architecto aspernatur illo illo. Occaecati rerum aliquam officia temporibus voluptatem perspiciatis facilis. Cumque veritatis saepe odit fuga aspernatur aliquid fuga at.\nReiciendis assumenda aliquam nobis distinctio hic minima pariatur. Architecto veniam facilis ipsam soluta eligendi quos. Laborum odio aliquam accusantium.\nExcepturi molestiae excepturi veritatis ducimus similique occaecati commodi autem. Perferendis laborum sint qui enim quaerat alias. Perferendis deserunt aperiam dolor minus consequuntur voluptatem dignissimos voluptatem.\nCupiditate illo occaecati facere dolor excepturi itaque. Et esse inventore laudantium voluptatum. Reiciendis repudiandae architecto fuga deleniti eum quasi.\nAssumenda minus quibusdam tempore vitae recusandae sit sed. Cum possimus dignissimos sed vitae maxime. In omnis nihil fugiat molestias corrupti tenetur quam neque cumque.\nCommodi repellat temporibus alias inventore eveniet. Dolor itaque ea error. Voluptate animi labore.",
  authorId: "fa444ce5-797d-4312-994f-6ca766105635",
  categoryId: 2,
  location: "Cielocester",
  subject: "incidunt",
  objective: "烏克麗麗",
  rateType: null,
  rate: 1620,
  createdAt: "2023-06-03T00:39:40.519+00:00",
  updatedAt: null,
  deletedAt: null,
  tags: ["電腦繪圖"],
  author: {
    id: "fa444ce5-797d-4312-994f-6ca766105635",
    name: "Miss Francis Pollich",
    img: null,
    title: "Direct Intranet Orchestrator",
  },
  category: {
    id: 2,
    name: "FIND_STUDENT",
  },
};

describe("Post", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<Post data={mockData} />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByRole("article")).toBeTruthy();
  });
});
