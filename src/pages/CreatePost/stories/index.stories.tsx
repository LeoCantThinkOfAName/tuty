import type { Meta, StoryObj } from "@storybook/react";

import { CreatePostPage } from "../index";
import { StoryLayout } from "../../../layouts/StoryLayout";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Pages/Create Post Page",
  component: CreatePostPage,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "full",
  },
} satisfies Meta<typeof CreatePostPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (props) => (
    <StoryLayout>
      <CreatePostPage {...props} />
    </StoryLayout>
  ),
  args: {
    children: <>test</>,
  },
  name: "Default",
};
