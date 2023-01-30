import { FunctionComponent } from "react";

export type CardProperties = {
  imagePath: string;
  name: string;
  group: string;
  amount: string;
  shopDate: string;
};

export type CardComponent = FunctionComponent<CardProperties>;
