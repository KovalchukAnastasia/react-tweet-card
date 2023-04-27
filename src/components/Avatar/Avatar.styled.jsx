import styled from "styled-components";
import { constants } from "../../constants/constants";
export const AvatarContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: baseline;
  left: 150px;
  top: 178px;
  width: 80px;
  height: 80px;
  border: ${constants.buttonColor} solid 8px;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3, inset 0px 4.39163px 3.29372px #fbf8;
`;

export const AvatarImage = styled.img`
  align-self: end;
  width: 50px;
  height: 55px;
`;
