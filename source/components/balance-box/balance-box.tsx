import {
  BalanceWrapper,
  Box,
  CurrentBalance,
  Title,
} from "./balance-box.styles";

const BalenceBox = () => {
  return (
    <Box>
      <BalanceWrapper>
        <Title>Stan konta</Title>
        <CurrentBalance>34253$</CurrentBalance>
      </BalanceWrapper>
    </Box>
  );
};

export default BalenceBox;
