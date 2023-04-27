import styled from "styled-components";
import { constants } from "../../constants/constants";

export const ButtonWrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  width: 196px;
  height: 50px;
  background-color: ${(p) =>
    p.status === "follow" ? constants.buttonColor : constants.activeColor};
  box-shadow: 0px 3.43693px 3.43693px ${constants.buttonShadowColor};
  border-radius: 10.3108px;
`;
export const ButtonText = styled.p`
  color: ${constants.buttonTextColor};
`;
