import { FunctionComponent } from "react";
import {
  CardWrapper,
  HeaderText,
  Image,
  ImageTextWrapper,
  ImageWrapper,
  Subtitle,
  TextWrapper,
  ValueWrapper,
} from "./card.styles";
import { CardProperties } from "./card.types";

const Card: FunctionComponent<CardProperties> = ({
  imagePath,
  name,
  group,
  amount,
  shopDate,
}: CardProperties): JSX.Element => {
  return (
    <CardWrapper>
      <ImageTextWrapper>
        <ImageWrapper>
          <Image src={imagePath} />
        </ImageWrapper>
        <TextWrapper>
          <HeaderText>{name}</HeaderText>
          <Subtitle>{group}</Subtitle>
        </TextWrapper>
      </ImageTextWrapper>

      <ValueWrapper>
        <HeaderText>{amount}</HeaderText>
        <Subtitle>{shopDate}</Subtitle>
      </ValueWrapper>
    </CardWrapper>
  );
};

export default Card;
