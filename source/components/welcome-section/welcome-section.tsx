import { getHours } from "date-fns";
import { inRange } from "lodash";
import { FunctionComponent } from "react";
import {
  HandAnimatedEmoji,
  MoonAnimatedEmoji,
  SunAnimatedEmoji,
} from "./welcome-section.parts";
import { WelcomeSectionWrapper } from "./welcome-section.styles";

type HourToComponentMapper = (hour: number) => FunctionComponent;

const hourToComponentMapper: HourToComponentMapper = (
  hour: number,
): FunctionComponent => {
  if (inRange(hour, 6, 9)) {
    return HandAnimatedEmoji;
  } else if (inRange(hour, 10, 15)) {
    return SunAnimatedEmoji;
  } else {
    return MoonAnimatedEmoji;
  }
};
const WelcomeSection: FunctionComponent = (): JSX.Element => {
  const currentHour: number = getHours(new Date());
  const CurrentEmoji: FunctionComponent = hourToComponentMapper(currentHour);
  return (
    <WelcomeSectionWrapper>
      Hi! <CurrentEmoji />
    </WelcomeSectionWrapper>
  );
};
export default WelcomeSection;
