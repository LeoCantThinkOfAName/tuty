import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Header/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "full",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  name: "Default",
};
