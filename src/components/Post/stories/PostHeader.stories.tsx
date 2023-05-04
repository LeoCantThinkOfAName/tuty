import type { Meta, StoryObj } from "@storybook/react";

import { PostHeader } from "../PostHeader";
import { Card } from "@chakra-ui/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Post/Post Header",
  component: PostHeader,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof PostHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    userName: "User Name",
    jobTitle: "Copywriter",
    category: "Exchange",
    date: new Date(new Date().getTime() - 1000 * 60 * 60 * (24 * 30)),
  },
  name: "Default",
};
