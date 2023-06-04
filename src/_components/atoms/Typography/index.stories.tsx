import { ComponentMeta, ComponentStory } from "@storybook/react";

import Typography from ".";
import theme from "../../../core-utils/theme";

export default {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption1",
        "caption2",
        "overline",
      ],
      defaultValue: { summary: "heading1" },
      type: "string",
      description: "The variant of the text",
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}></Typography>
);

export const Text = Template.bind({});

Text.args = {
  variant: "h1",
  children: "Broccoli Labs",
  sx: {
    color: theme.palette.primary.main,
  },
};

export const InteractiveText = Template.bind({});

InteractiveText.args = {
  variant: "overline",
  children: "Discover",
  sx: {
    color: theme.palette.primary.main,
  },
};
