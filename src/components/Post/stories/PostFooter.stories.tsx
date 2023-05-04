import type { Meta, StoryObj } from "@storybook/react";

import { PostFooter } from "../PostFooter";
import { Card } from "@chakra-ui/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Post/Post Footer",
  component: PostFooter,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof PostFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    tags: ["Hello", "World"],
  },
  name: "Default",
};
