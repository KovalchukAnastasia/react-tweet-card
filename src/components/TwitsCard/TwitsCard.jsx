import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { UserInfo } from "../UserInfo/UserInfo";
import logo from "../../images/logo.png";
import {
  TwitCardItem,
  BackgroundImage,
  Container,
  Logo,
  LogoImage,
  TwitsCardContainer,
} from "./TwitsCard.styled";

export const TwitsCard = ({ user, changeUserInfo }) => {
  const { id, avatar, tweets, followers, status } = user;

  return (
    <TwitsCardContainer>
      <TwitCardItem>
        <Container>
          <BackgroundImage>
            <Logo>
              <LogoImage src={logo} alt="logo" />
            </Logo>
            <Avatar avatar={avatar} />
            <UserInfo
              status={status}
              id={id}
              tweets={tweets}
              followers={followers}
              changeUserInfo={changeUserInfo}
            />
          </BackgroundImage>
        </Container>
      </TwitCardItem>
    </TwitsCardContainer>
  );
};
