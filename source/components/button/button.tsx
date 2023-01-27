import Icon from "@mdi/react";
import { ButtonWrapper } from "./button.styles";
import {
  ButtonComponent,
  ButtonProperties,
  ButtonVariant,
} from "./button.types";

/**
 * Generic button
 * @type {ButtonComponent}
 * @param {ButtonProperties} props properties of button
 * @returns {JSX.Element} Rendered button
 */
const Button: ButtonComponent = ({
  children,
  icon,
  iconProperties,
  variant = ButtonVariant.Dark,
  ...rest
}: ButtonProperties): JSX.Element => {
  return (
    <ButtonWrapper {...rest} variant={variant}>
      {icon && <Icon path={icon} size={1.1} color="#fff" {...iconProperties} />}
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;
