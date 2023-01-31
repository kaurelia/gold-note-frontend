import { getHours } from "date-fns";
import { inRange } from "lodash";
import { FunctionComponent } from "react";
import {
  AnimatedBox,
  AnimatedBoxHand,
  WelcomeSectionWrapper,
} from "./welcome-section.styles";

const hourToComponentMapper = (hour: number) => {
  if (inRange(hour, 6, 9)) {
    return () => {
      return (
        <AnimatedBoxHand
          animate={{ rotate: [0, 14, 8, 14, -4, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
        >
          👋
        </AnimatedBoxHand>
      );
    };
  } else if (inRange(hour, 10, 15)) {
    return () => {
      return (
        <AnimatedBox
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 1 }}
        >
          ☀️
        </AnimatedBox>
      );
    };
  } else {
    return () => {
      return (
        <AnimatedBox
          animate={{ rotate: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
        >
          🌚
        </AnimatedBox>
      );
    };
  }
};
const WelcomeSection: FunctionComponent = () => {
  const currentHour: number = getHours(new Date());
  const CurrentEmoji: FunctionComponent = hourToComponentMapper(currentHour);
  return (
    <WelcomeSectionWrapper>
      Hi! <CurrentEmoji />
    </WelcomeSectionWrapper>
  );
};
export default WelcomeSection;
