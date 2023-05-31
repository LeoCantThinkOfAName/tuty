import type { Meta, StoryObj } from "@storybook/react";

import { InputField } from "../fields/InputField";
import { Input } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { StoryLayout } from "../../../layouts/StoryLayout";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Input/Input Field",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "full",
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (props) => {
    const methods = useForm();
    return (
      <StoryLayout>
        <FormProvider {...methods}>
          <Input {...props} />
        </FormProvider>
      </StoryLayout>
    );
  },
  args: {
    name: "Some input",
  },
  name: "Default",
};
