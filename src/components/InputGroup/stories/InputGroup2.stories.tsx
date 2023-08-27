import type { Meta, StoryObj } from "@storybook/react";

import { InputGroup, InputGroupItem } from "../index";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Input/InputGroup2",
  component: InputGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Test: Story = {
  name: "Default",
  args: {
    value: "",
    maxLength: 1,
    onChange: (value) => console.log(value),
  },
  render: (props) => DefaultStory(props),
};

const DefaultStory = (props: Meta<typeof InputGroup>) => {
  const [value, setValue] = useState<string>("");

  return (
    <InputGroup
      value={value}
      maxLength={props.args?.maxLength || 1}
      onChange={(value) => setValue(value)}
    >
      <InputGroupItem />
      <InputGroupItem />
      <InputGroupItem />
    </InputGroup>
  );
};
