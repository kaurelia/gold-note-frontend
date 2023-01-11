import Icon from "@mdi/react";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { ButtonWrapper } from "./button.styles";
type ButtonProperties = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    icon: string;
    iconProperties?: Omit<Parameters<typeof Icon>[0], "path">;
  }
>;

const Button = ({
  children,
  icon,
  iconProperties,
  ...rest
}: ButtonProperties) => {
  return (
    <ButtonWrapper {...rest}>
      <Icon path={icon} size={1.1} color="#fff" {...iconProperties} />

      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;
