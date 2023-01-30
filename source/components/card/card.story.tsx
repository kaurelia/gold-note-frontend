import { ComponentStory } from "@storybook/react";
import AppProvider from "../app-provider/app-provider";
import GlobalStyles from "../global-styles/global-styles";
import Card from "./card";
import { CardComponent, CardProperties } from "./card.types";

const Template: ComponentStory<CardComponent> = (props: CardProperties) => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Card {...props} />
    </AppProvider>
  );
};

export const CardExample = Template.bind({});
CardExample.args = {
  imagePath: "/images/gold-bars.png",
  name: "Test name",
  group: "Test group",
  shopDate: "23.04.2023",
  amount: "+ $400",
};

export default {
  title: "Card example",
  component: CardExample,
};
