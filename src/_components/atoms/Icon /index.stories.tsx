import { ComponentMeta, ComponentStory } from "@storybook/react";

import Icon from "./index";
import LogoIcon from "../../../../public/assets/icons/Logo.svg";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    src: {
      control: "text",
      description: "The source of the icon",
      defaultValue: LogoIcon,
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Logo = Template.bind({});

Logo.args = {
  src: "/assets/icons/Logo.svg",
};
