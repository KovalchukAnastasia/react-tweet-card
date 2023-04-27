import styled from "styled-components";
import backgroundImage from "../../images/bg-img.png";

export const TwitCardItem = styled.li``;

export const TwitsCardContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  width: 380px;
  height: 460px;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
`;

export const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-size: 308px 168px;
  background-position: top 28px left 36px;
  background-image: url(${backgroundImage});
`;

export const Logo = styled.div`
  position: absolute;
  z-index: 5;
  left: 20px;
  top: 20px;
  right: 20px;
  width: 76px;
  height: 22px;
`;
export const LogoImage = styled.img``;
