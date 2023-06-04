import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./index";
import theme from "../../../core-utils/theme";
import Typography from "../Typography";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  children: (
    <Typography variant="subtitle2" color={theme.palette.primary.light}>
      Login
    </Typography>
  ),
  disabled: false,
  style: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.main,
    padding: "12px 16px",
    borderRadius: "8px",
    width: "100%",
    height: "auto",
  },
};
export const Text = Template.bind({});
Text.args = {
  children: (
    <Typography variant="subtitle2" color={theme.palette.primary.light}>
      Login
    </Typography>
  ),
  variant: "text",
  disabled: false,
  style: {
    color: theme.palette.primary.main,
    padding: "12px 16px",
    borderRadius: "8px",
  },
};
