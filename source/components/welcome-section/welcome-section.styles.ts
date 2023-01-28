import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AnimatedBox = styled(motion.div)`
  display: inline-block;
`;
export const AnimatedBoxHand = styled(AnimatedBox)`
  transform-origin: 70% 70%;
`;

export const WelcomeSectionWrapper = styled.span`
  color: #010000;
  font-weight: 700;

  font-size: 1.5rem;
`;
