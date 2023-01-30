import styled from "@emotion/styled";

export const Image = styled.img`
  width: 50px;
  height: 50px;
  padding: 5px;
`;
export const ImageTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: inline-block;
  background: rgba(213, 214, 216, 0.22);
  border-radius: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-between;
`;

export const HeaderText = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
`;
export const Subtitle = styled.span`
  font-size: 0.8rem;
  color: #b9b9b9;
`;

export const TextWrapper = styled.div`
  color: #010000;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 2px;
`;

export const ValueWrapper = styled(TextWrapper)`
  align-items: flex-end;
`;
