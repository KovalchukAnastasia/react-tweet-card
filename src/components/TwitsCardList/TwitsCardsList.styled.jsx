import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  width: 380px;
  height: 460px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 380px);
  gap: 10px;
  list-style: none;
`;
