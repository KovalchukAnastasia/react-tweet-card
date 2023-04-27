import React from "react";
import { ButtonText, ButtonWrapper } from "./Button.styled";

export const Button = ({ changeUserInfo, id, status }) => {
  return (
    <ButtonWrapper status={status} onClick={() => changeUserInfo(id)}>
      <ButtonText>{status}</ButtonText>
    </ButtonWrapper>
  );
};
