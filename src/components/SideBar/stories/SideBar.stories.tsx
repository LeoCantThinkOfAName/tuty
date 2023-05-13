import type { Meta, StoryObj } from "@storybook/react";

import { SideBar } from "../index";
import { StoryLayout } from "../../../layouts/StoryLayout";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "SideBar/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "full",
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (props) => (
    <StoryLayout>
      <SideBar {...props} />
    </StoryLayout>
  ),
  args: {
    menu: [
      {
        category: "First",
        items: [
          {
            title: "First child",
            path: "/",
          },
          {
            title: "Second child",
            path: "/first-second",
          },
        ],
      },
      {
        category: "Second",
        items: [
          {
            title: "First child",
            path: "/second-first",
          },
          {
            title: "Second child",
            path: "/second-second",
          },
          {
            title: "Third child",
            path: "/second-third",
          },
        ],
      },
      {
        category: "Third",
        items: [
          {
            title: "First child",
            path: "/third-first",
          },
        ],
      },
    ],
  },
  name: "Default",
};
