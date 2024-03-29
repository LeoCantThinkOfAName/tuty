import type { Meta, StoryObj } from "@storybook/react";

import { PostBody } from "../PostBody";
import { Card } from "@chakra-ui/react";
import { data } from "./Post.stories";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Post/Post Body",
  component: PostBody,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof PostBody>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    post: data,
  },
  name: "Default",
};
