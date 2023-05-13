import type { Meta, StoryObj } from "@storybook/react";

import { MainLayout } from "../MainLayout";
import { StoryLayout } from "../StoryLayout";
import { Text } from "@chakra-ui/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "MainLayout/MainLayout",
  component: MainLayout,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "full",
  },
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (props) => (
    <StoryLayout>
      <MainLayout {...props} />
    </StoryLayout>
  ),
  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, porro
          eaque! Aliquam impedit cupiditate assumenda voluptatibus dignissimos
          velit quaerat doloribus nulla? Quasi fugiat illum sequi maiores cumque
          praesentium ducimus laborum? A minima provident sunt nobis quas?
          Perspiciatis non quisquam soluta libero similique doloribus nisi hic
          consequatur dolor veritatis voluptas unde, sed mollitia quam
          laudantium omnis? Aperiam tempora dicta, autem, modi unde non beatae
          labore consequuntur quisquam eum nostrum ad explicabo officia
          distinctio! Autem repellendus vitae nemo labore a doloremque, suscipit
          omnis aliquam vero illo minima? Iste reiciendis ab accusantium alias
          nobis, expedita veniam numquam quisquam tempora minus eligendi
          necessitatibus nihil dolorum velit atque error dicta, explicabo
          incidunt eveniet distinctio maxime modi. Reiciendis amet earum ipsa,
          alias consequuntur officia ipsum consectetur eligendi? Officiis minus
          nobis ab rerum! Dicta, exercitationem. Dolores dicta fugit temporibus
          libero impedit itaque, ducimus, omnis nobis cum perferendis iusto
          assumenda! Minima iure sunt unde aliquid veniam alias? Officia
          reprehenderit temporibus dolorum magni eos vel numquam tempora! Fuga
          amet id molestiae nobis consectetur. Aut, ab quo? Maxime doloribus
          numquam est officiis laboriosam praesentium, facilis omnis voluptate,
          deleniti veritatis, explicabo ipsam? Maiores nihil repudiandae labore
          iusto tempore debitis eos asperiores aliquid assumenda earum nesciunt
          nisi dolorum veniam rem sed, illo, sit molestias obcaecati possimus
          sunt. Libero consequuntur unde accusantium! Unde quis obcaecati
          maiores itaque nisi animi, assumenda cumque ratione quasi
          necessitatibus quam impedit alias consequuntur ipsa molestias dolorem
          iusto corrupti et, nulla quisquam placeat doloremque, dolores quos!
          Necessitatibus voluptatem modi itaque culpa voluptate voluptatibus
          totam vitae alias adipisci nisi perspiciatis pariatur cupiditate eaque
          sapiente asperiores earum quam ex reprehenderit, natus in maiores
          libero. Voluptates cum dolorem minima nobis, earum quo dolores beatae
          voluptate rerum autem consequatur officia dignissimos ut facere. Nemo
          non libero tempore eveniet consequatur praesentium illo est,
          voluptatibus in ipsum cum vero adipisci numquam sed aut laboriosam
          sequi.
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, porro
          eaque! Aliquam impedit cupiditate assumenda voluptatibus dignissimos
          velit quaerat doloribus nulla? Quasi fugiat illum sequi maiores cumque
          praesentium ducimus laborum? A minima provident sunt nobis quas?
          Perspiciatis non quisquam soluta libero similique doloribus nisi hic
          consequatur dolor veritatis voluptas unde, sed mollitia quam
          laudantium omnis? Aperiam tempora dicta, autem, modi unde non beatae
          labore consequuntur quisquam eum nostrum ad explicabo officia
          distinctio! Autem repellendus vitae nemo labore a doloremque, suscipit
          omnis aliquam vero illo minima? Iste reiciendis ab accusantium alias
          nobis, expedita veniam numquam quisquam tempora minus eligendi
          necessitatibus nihil dolorum velit atque error dicta, explicabo
          incidunt eveniet distinctio maxime modi. Reiciendis amet earum ipsa,
          alias consequuntur officia ipsum consectetur eligendi? Officiis minus
          nobis ab rerum! Dicta, exercitationem. Dolores dicta fugit temporibus
          libero impedit itaque, ducimus, omnis nobis cum perferendis iusto
          assumenda! Minima iure sunt unde aliquid veniam alias? Officia
          reprehenderit temporibus dolorum magni eos vel numquam tempora! Fuga
          amet id molestiae nobis consectetur. Aut, ab quo? Maxime doloribus
          numquam est officiis laboriosam praesentium, facilis omnis voluptate,
          deleniti veritatis, explicabo ipsam? Maiores nihil repudiandae labore
          iusto tempore debitis eos asperiores aliquid assumenda earum nesciunt
          nisi dolorum veniam rem sed, illo, sit molestias obcaecati possimus
          sunt. Libero consequuntur unde accusantium! Unde quis obcaecati
          maiores itaque nisi animi, assumenda cumque ratione quasi
          necessitatibus quam impedit alias consequuntur ipsa molestias dolorem
          iusto corrupti et, nulla quisquam placeat doloremque, dolores quos!
          Necessitatibus voluptatem modi itaque culpa voluptate voluptatibus
          totam vitae alias adipisci nisi perspiciatis pariatur cupiditate eaque
          sapiente asperiores earum quam ex reprehenderit, natus in maiores
          libero. Voluptates cum dolorem minima nobis, earum quo dolores beatae
          voluptate rerum autem consequatur officia dignissimos ut facere. Nemo
          non libero tempore eveniet consequatur praesentium illo est,
          voluptatibus in ipsum cum vero adipisci numquam sed aut laboriosam
          sequi.
        </Text>
      </>
    ),
  },
  name: "Default",
};
