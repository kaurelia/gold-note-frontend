import { BalanceWrapper, Box, CurrentBalance, Title } from "./price-box.styles";

const PriceBox = () => {
  return (
    <Box>
      <BalanceWrapper>
        <Title>Stan konta</Title>
        <CurrentBalance>34253$</CurrentBalance>
      </BalanceWrapper>
    </Box>
  );
};

export default PriceBox;
