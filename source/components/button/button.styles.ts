import styled from "@emotion/styled";

export const ButtonWrapper = styled.div`
  background: #010000;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 15px;
  overflow-wrap: anywhere;
  > * {
    margin: 0 5px;
    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
  }
`;
