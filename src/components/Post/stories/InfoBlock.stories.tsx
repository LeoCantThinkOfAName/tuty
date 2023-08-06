import type { Meta, StoryObj } from "@storybook/react";

import { InfoBlock } from "../InfoBlock";
import { Card } from "@chakra-ui/react";
import { data } from "./Post.stories";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Post/Info Block",
  component: InfoBlock,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof InfoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...data,
  },
  name: "Default",
};
