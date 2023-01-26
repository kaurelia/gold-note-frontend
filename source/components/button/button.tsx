import Icon from "@mdi/react";
import { ButtonWrapper } from "./button.styles";
import { ButtonProperties, ButtonVariant } from "./button.types";

const Button = ({
  children,
  icon,
  iconProperties,
  variant = ButtonVariant.Dark,
  ...rest
}: ButtonProperties) => {
  return (
    <ButtonWrapper {...rest} variant={variant}>
      {icon && <Icon path={icon} size={1.1} color="#fff" {...iconProperties} />}
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;
