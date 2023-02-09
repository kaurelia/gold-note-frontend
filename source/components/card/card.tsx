import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { FunctionComponent } from "react";
import {
  CardWrapper,
  DropdownIconWrapper,
  HeaderText,
  Image,
  ImageTextWrapper,
  ImageWrapper,
  ShrinkedWrapper,
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
    <ShrinkedWrapper>
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
      <DropdownIconWrapper>
        <Icon path={mdiChevronDown} size={1} color="black" />
      </DropdownIconWrapper>
    </ShrinkedWrapper>
  );
};

export default Card;
