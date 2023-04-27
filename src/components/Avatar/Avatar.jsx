import React from "react";
import { AvatarContainer, AvatarImage } from "./Avatar.styled";

export const Avatar = ({ avatar }) => {
  return (
    <AvatarContainer>
      <AvatarImage src={avatar} />
    </AvatarContainer>
  );
};
