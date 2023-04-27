import React from "react";
import { Button } from "../Button/Button";
import {
  DividerBox,
  DividerLeft,
  DividerRight,
  UserInfoContainer,
  UserInfoItem,
  UserInfoList,
} from "./UserInfo.styled";

export const UserInfo = ({ id, tweets, followers, changeUserInfo, status }) => {
  const normalizedFollowers = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(followers);
  return (
    <UserInfoContainer>
      <DividerBox>
        <DividerLeft />
        <DividerRight />
      </DividerBox>
      <UserInfoList>
        <UserInfoItem>{tweets} TWEETS</UserInfoItem>
        <UserInfoItem>FOLLOWERS {normalizedFollowers}</UserInfoItem>
      </UserInfoList>
      <Button id={id} changeUserInfo={changeUserInfo} status={status} />
    </UserInfoContainer>
  );
};
