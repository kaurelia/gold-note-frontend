import { ComponentStory } from "@storybook/react";
import { FunctionComponent } from "react";
import AppProvider from "../app-provider/app-provider";
import GlobalStyles from "../global-styles/global-styles";
import WelcomeSection from "./welcome-section";

const Template: ComponentStory<FunctionComponent> = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <WelcomeSection />
    </AppProvider>
  );
};

export const WelcomeSectionExample = Template.bind({});

export default {
  title: "Welcome section",
  component: WelcomeSection,
};
