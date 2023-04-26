import type { Meta, StoryObj } from "@storybook/react";

import { OTPModal } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Modal/OTPModal",
  component: OTPModal,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof OTPModal>;

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
