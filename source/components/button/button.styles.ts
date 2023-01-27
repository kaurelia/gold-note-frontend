import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProperties, ButtonVariant } from "./button.types";

export const ButtonWrapper = styled.div<Pick<ButtonProperties, "variant">>`
  background: ${({ variant }) => {
    return variant === ButtonVariant.Light ? "#fff" : "#010000";
  }};
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 15px;
  overflow-wrap: anywhere;
  ${({ variant }) => {
    return (
      variant === ButtonVariant.Light &&
      css`
        color: #010000;
        border: 2px solid #e0e0e0;
      `
    );
  }}

  > * {
    margin: 0 5px;
    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
  }
`;
