import { mdiPlus } from "@mdi/js";
import { ComponentStory } from "@storybook/react";
import AppProvider from "../app-provider/app-provider";
import GlobalStyles from "../global-styles/global-styles";
import Button from "./button";
import {
  ButtonComponent,
  ButtonProperties,
  ButtonVariant,
} from "./button.types";

const Template: ComponentStory<ButtonComponent> = (props: ButtonProperties) => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Button {...props} />
    </AppProvider>
  );
};

export const ButtonWithIconExample = Template.bind({});
ButtonWithIconExample.args = {
  icon: mdiPlus,
  iconProperties: { color: "orange" },
  children: "Test text",
  variant: ButtonVariant.Dark,
};

export const ButtonWithoutIconExample = Template.bind({});
ButtonWithoutIconExample.args = { children: "Test text" };

export const ButtonVariantExample = Template.bind({});
ButtonVariantExample.args = {
  icon: mdiPlus,
  iconProperties: { color: "orange" },
  children: "Test text",
  variant: ButtonVariant.Light,
};

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: "radio" },
    },
  },
};
