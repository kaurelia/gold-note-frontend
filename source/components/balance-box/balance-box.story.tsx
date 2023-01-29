import { ComponentStory } from "@storybook/react";
import { FunctionComponent } from "react";
import AppProvider from "../app-provider/app-provider";
import GlobalStyles from "../global-styles/global-styles";
import BalenceBox from "./balance-box";

const Template: ComponentStory<FunctionComponent> = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <BalenceBox />
    </AppProvider>
  );
};

export const BalanceBoxExample = Template.bind({});

export default {
  title: "Balance box",
  component: BalenceBox,
};
