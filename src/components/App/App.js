import { TwitsCardList } from "../TwitsCardList/TwitsCardList";
import { Container } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Container>
      <TwitsCardList />
      <GlobalStyle />
    </Container>
  );
}

export default App;
