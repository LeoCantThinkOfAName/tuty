import type { Meta, StoryObj } from "@storybook/react";

import { AuthModal } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Modal/AuthModal",
  component: AuthModal,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AuthModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  name: "Default",
};
