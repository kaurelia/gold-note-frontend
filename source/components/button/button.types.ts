import Icon from "@mdi/react";
import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type ButtonPropertiesBase = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  variant?: ButtonVariant;
};

type ButtonPropertiesWithIcon = {
  icon: string;
  iconProperties?: Omit<Parameters<typeof Icon>[0], "path">;
};

type ButtonPropertiesWithoutIcon = {
  icon?: never;
  iconProperties?: never;
};

export type ButtonProperties = PropsWithChildren<
  ButtonPropertiesBase &
    (ButtonPropertiesWithIcon | ButtonPropertiesWithoutIcon)
>;

export type ButtonComponent = FunctionComponent<ButtonProperties>;

export enum ButtonVariant {
  Light = "light",
  Dark = "dark",
}
