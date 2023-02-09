import Card from "../card/card";
import { CardSectionWrapper } from "./card-section.styles";

const CardSection = () => {
  return (
    <CardSectionWrapper>
      <Card
        amount="+ $100"
        shopDate="27.03.2023"
        imagePath="/images/gold-bars.png"
        name="My first asset"
        group="For rent"
      />
    </CardSectionWrapper>
  );
};

export default CardSection;
