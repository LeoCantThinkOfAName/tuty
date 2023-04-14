import type { Meta, StoryObj } from "@storybook/react";

import { InputGroup, InputGroupItem } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Input/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: [
      <InputGroupItem />,
      <InputGroupItem />,
      <InputGroupItem />,
      <InputGroupItem />,
    ],
  },
};
