import styled from "@emotion/styled";

export const Box = styled.div`
  height: 100px;
  width: 400px;
  border-radius: 15px;
  background-color: #eec0c6;
  background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
  display: flex;
  flex-direction: column;
`;

export const CurrentBalance = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 30px;
`;
