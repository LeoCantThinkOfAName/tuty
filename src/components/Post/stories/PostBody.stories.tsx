import type { Meta, StoryObj } from "@storybook/react";

import { PostBody } from "../PostBody";
import { Card } from "@chakra-ui/react";

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
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, pariatur omnis, explicabo ut dolores fugit sequi sint corporis cumque aliquid voluptatibus eveniet autem, laboriosam sapiente. Saepe aliquid repudiandae harum, molestiae repellendus reprehenderit ab sapiente, provident eum dignissimos asperiores nobis consectetur sunt et cupiditate rem? Quam autem ducimus exercitationem sapiente aut, quisquam dignissimos numquam expedita! Sapiente, minus minima! Aliquam, odit officia! Veniam laborum distinctio culpa eveniet perferendis ad fugit illum iusto libero harum, rem, possimus quae quos ea earum, eligendi non! Minima totam ut doloremque ipsum consequatur aspernatur voluptatem velit ex aut placeat aperiam id suscipit in tempora, exercitationem atque pariatur.",
  },
  name: "Default",
};
