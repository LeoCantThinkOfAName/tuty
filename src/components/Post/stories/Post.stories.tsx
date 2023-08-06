import type { Meta, StoryObj } from "@storybook/react";

import { Post } from "../index";
import { Post as PostType } from "../../../services/usePosts";

export const data: PostType = {
  authorId: "123",
  content: "This is a post from Author",
  categoryId: 1,
  createdAt: new Date().toDateString(),
  deletedAt: null,
  updatedAt: null,
  id: "123",
  location: "Taipei",
  objective: "Learn somthing new",
  rate: 1000,
  rateType: "day",
  tags: ["Tag 1", "Tag 2"],
  subject: "123",
  author: {
    id: "123",
    img: "",
    name: "Author",
    title: "Job Title",
  },
  category: {
    id: 1,
    name: "Category",
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Post/Post",
  component: Post,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    data,
  },
  name: "Default",
};
