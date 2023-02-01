import { FunctionComponent } from "react";
import { AnimatedBox, AnimatedBoxHand } from "./welcome-section.styles";

export const HandAnimatedEmoji: FunctionComponent = (): JSX.Element => {
  return (
    <AnimatedBoxHand
      animate={{ rotate: [0, 14, 8, 14, -4, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
    >
      👋
    </AnimatedBoxHand>
  );
};

export const SunAnimatedEmoji: FunctionComponent = (): JSX.Element => {
  return (
    <AnimatedBox
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 3, repeatDelay: 1 }}
    >
      ☀️
    </AnimatedBox>
  );
};

export const MoonAnimatedEmoji: FunctionComponent = (): JSX.Element => {
  return (
    <AnimatedBox
      animate={{ rotate: [0, -14, 0] }}
      transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
    >
      🌚
    </AnimatedBox>
  );
};
